const t = require('tap')
const requireInject = require('require-inject')
const fixBin = require('../lib/fix-bin.js')
const umask = process.umask()
const fs = require('fs')
const { readFileSync, statSync, chmodSync } = fs

t.test('fix windows hashbang', async t => {
  const dir = t.testdir({
    whb: `#!/usr/bin/env node\r\nconsole.log('hello')\r\n`,
  })
  chmodSync(`${dir}/whb`, 0o644)
  await fixBin(`${dir}/whb`)
  t.equal((statSync(`${dir}/whb`).mode & 0o777), 0o777 & (~umask), 'has exec perms')
  t.equal(readFileSync(`${dir}/whb`, 'utf8'),
    `#!/usr/bin/env node\nconsole.log('hello')\r\n`, 'fixed \\r on hashbang line')
})

t.test('dont fix non-windows hashbang file', async t => {
  const dir = t.testdir({
    goodhb: `#!/usr/bin/env node\nconsole.log('hello')\r\n`,
  })
  chmodSync(`${dir}/goodhb`, 0o644)
  await fixBin(`${dir}/goodhb`)
  t.equal((statSync(`${dir}/goodhb`).mode & 0o777), 0o777 & (~umask), 'has exec perms')
  t.equal(readFileSync(`${dir}/goodhb`, 'utf8'),
    `#!/usr/bin/env node\nconsole.log('hello')\r\n`, 'fixed \\r on hashbang line')
})

t.test('failure to read means not a windows hash bang file', async t => {
  const fsMock = {
    ...fs,
    read: (a, b, c, d, e, cb) => {
      fsMock.read = null
      process.nextTick(() => cb(new Error('witaf')))
    },
  }
  const mockedFixBin = requireInject('../lib/fix-bin.js', {
    fs: fsMock,
  })

  const dir = t.testdir({
    whb: `#!/usr/bin/env node\r\nconsole.log('hello')\r\n`,
  })
  chmodSync(`${dir}/whb`, 0o644)
  await mockedFixBin(`${dir}/whb`)
  t.equal((statSync(`${dir}/whb`).mode & 0o777), 0o777 & (~umask), 'has exec perms')
  t.equal(readFileSync(`${dir}/whb`, 'utf8'),
    /* eslint-disable-next-line max-len */
    `#!/usr/bin/env node\r\nconsole.log('hello')\r\n`, 'did not fix \\r on hashbang line (failed read)')
})

t.test('failure to close is ignored', async t => {
  const fsMock = {
    ...fs,
    close: (fd, cb) => {
      fsMock.close = fs.close
      process.nextTick(() => cb(new Error('witaf')))
    },
  }
  const mockedFixBin = requireInject('../lib/fix-bin.js', {
    fs: fsMock,
  })

  const dir = t.testdir({
    whb: `#!/usr/bin/env node\r\nconsole.log('hello')\r\n`,
  })
  chmodSync(`${dir}/whb`, 0o644)
  await mockedFixBin(`${dir}/whb`)
  t.equal((statSync(`${dir}/whb`).mode & 0o777), 0o777 & (~umask), 'has exec perms')
  t.equal(
    readFileSync(`${dir}/whb`, 'utf8'),
    `#!/usr/bin/env node\nconsole.log('hello')\r\n`,
    'fixed \\r on hashbang line (ignored failed close)'
  )
})

t.test('custom exec mode', async t => {
  const dir = t.testdir({
    goodhb: `#!/usr/bin/env node\nconsole.log('hello')\r\n`,
  })
  chmodSync(`${dir}/goodhb`, 0o644)
  await fixBin(`${dir}/goodhb`, 0o755)
  t.equal((statSync(`${dir}/goodhb`).mode & 0o755), 0o755 & (~umask), 'has exec perms')
  t.equal(readFileSync(`${dir}/goodhb`, 'utf8'),
    `#!/usr/bin/env node\nconsole.log('hello')\r\n`, 'fixed \\r on hashbang line')
})

t.test('custom exec mode in windows', async t => {
  const dir = t.testdir({
    goodhb: `#!/usr/bin/env node\r\nconsole.log('hello')\r\n`,
  })
  chmodSync(`${dir}/goodhb`, 0o644)
  await fixBin(`${dir}/goodhb`, 0o755)
  t.equal((statSync(`${dir}/goodhb`).mode & 0o755), 0o755 & (~umask), 'has exec perms')
  t.equal(readFileSync(`${dir}/goodhb`, 'utf8'),
    `#!/usr/bin/env node\nconsole.log('hello')\r\n`, 'fixed \\r on hashbang line')
})

const fs = require('fs')
let symLinkSupported = null
module.exports =
  symLinkSupported != null
    ? symLinkSupported
    : (symLinkSupported = checkSymLink())

function checkSymLink () {
  var canLinkSrc = tmpName()
  var canLinkDest = tmpName()

  try {
    fs.writeFileSync(canLinkSrc, '')
  } catch (e) {
    return false
  }

  try {
    fs.symlinkSync(canLinkSrc, canLinkDest)
  } catch (e) {
    fs.unlinkSync(canLinkSrc)
    return false
  }

  console.log('canLinkSrc', canLinkSrc)
  console.log('canLinkDest', canLinkDest)

  fs.unlinkSync(canLinkSrc)
  fs.unlinkSync(canLinkDest)

  return true
}

function tmpName () {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(23).substring(2, 5)
  )
}

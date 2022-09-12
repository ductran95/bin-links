# Changelog

## [4.0.0](https://github.com/ductran95/bin-links/compare/v3.0.3...v4.0.0) (2022-09-12)


### ⚠ BREAKING CHANGES

* This drops support for node10 and non-LTS versions of node12 and node14
* Promises are now Promises, rather than blue birds.

### Features

* `fixBin` accept exec mode as optional parameter ([#29](https://github.com/ductran95/bin-links/issues/29)) ([983f2ee](https://github.com/ductran95/bin-links/commit/983f2eee959e1a3ec0b0132fe3b3a085d84ff57b))
* add binLinks.getPaths() method ([e9ce6d0](https://github.com/ductran95/bin-links/commit/e9ce6d06771463d252d803f0476ac6b045051e33))
* **dos2unix:** Log the fact line endings are being changed upon install. ([e9f8a6f](https://github.com/ductran95/bin-links/commit/e9f8a6f705b3c04a2e76258380d9025ea0c5cb2d))
* **import:** initial extraction from npm ([6ed0bfb](https://github.com/ductran95/bin-links/commit/6ed0bfb51bddeb77894f7a196f276de67b7fd524))
* **initial commit:** README ([3fc9cf0](https://github.com/ductran95/bin-links/commit/3fc9cf03797b7888d7a42bf7b2dc31441a2d9b6e))


### Bug Fixes

* do not add an extra 'lib' in global bin path ([38e3ca3](https://github.com/ductran95/bin-links/commit/38e3ca3bffe019b70c1b0519d36866f68f794f73))
* do not require a log option ([2c6fb91](https://github.com/ductran95/bin-links/commit/2c6fb91fe079c2a6fdc4b1a972ac283f4d4c64b3))
* don't filter out ./ man references ([b3cfd2e](https://github.com/ductran95/bin-links/commit/b3cfd2ec3a6c398afafaeddf4d4dac0094a36839))
* **linkMans:** return the promise! ([5eccc7f](https://github.com/ductran95/bin-links/commit/5eccc7f98a1b6646d24ae52e66cb3f28862d52bf))
* linting ([#48](https://github.com/ductran95/bin-links/issues/48)) ([163f021](https://github.com/ductran95/bin-links/commit/163f021115b7d724759ab7bdd878aabc2b5a94dd))
* prevent improper clobbering of man/bin links ([642cd18](https://github.com/ductran95/bin-links/commit/642cd1890d1e0ca32b5f9ceadc6a587d94a63d69)), closes [#11](https://github.com/ductran95/bin-links/issues/11) [#12](https://github.com/ductran95/bin-links/issues/12)
* remove unsafe regex ([5d01244](https://github.com/ductran95/bin-links/commit/5d01244a178488b3e110b967a81e5c2349316bb3))
* replace deprecated String.prototype.substr() ([#38](https://github.com/ductran95/bin-links/issues/38)) ([56dbfa0](https://github.com/ductran95/bin-links/commit/56dbfa06ee1efc9224fa7e8b8cab71643feff664))
* resolve folder that is passed in ([0bbd303](https://github.com/ductran95/bin-links/commit/0bbd303857e88ff7eca3fc24fe01069344707ecf))
* sanitize and validate bin and man link targets ([25a34f9](https://github.com/ductran95/bin-links/commit/25a34f905a0144cebcd41e56b6942117b267e005))
* **shebangs:** only convert CR when doing CRLF -> LF ([#2](https://github.com/ductran95/bin-links/issues/2)) ([43bf857](https://github.com/ductran95/bin-links/commit/43bf8577829e25addaac3d084888a5032b06805d))
* template-oss ([#30](https://github.com/ductran95/bin-links/issues/30)) ([3a50664](https://github.com/ductran95/bin-links/commit/3a5066464dc3497be7aaa39a19444494c41bc9a9))


* Use native Promises instead of Bluebird ([ee939c0](https://github.com/ductran95/bin-links/commit/ee939c0c42b42262591e4abab98f12a63ac206b2)), closes [#13](https://github.com/ductran95/bin-links/issues/13)


### Documentation

* update for v2 ([5ce48a1](https://github.com/ductran95/bin-links/commit/5ce48a15978ac5b57410c82793c3d36863393bd8)), closes [#14](https://github.com/ductran95/bin-links/issues/14)


### Dependencies

* bump cmd-shim from 4.1.0 to 5.0.0 ([#39](https://github.com/ductran95/bin-links/issues/39)) ([24a1f3c](https://github.com/ductran95/bin-links/commit/24a1f3cfb5b98a9e58ff59c0627877a20762a7ed))
* bump deps ([9d4127b](https://github.com/ductran95/bin-links/commit/9d4127b968dcac6785ba49777a6d7e0b7a411879))
* bump devDeps ([67351fa](https://github.com/ductran95/bin-links/commit/67351fa51173f5f5bb5ab43208dd0894d78c0598))
* bump npm-normalize-package-bin from 1.0.1 to 2.0.0 ([#50](https://github.com/ductran95/bin-links/issues/50)) ([3ffe1e9](https://github.com/ductran95/bin-links/commit/3ffe1e9192575bebaf5ec0860fa2f90ca03ba3fe))
* bump read-cmd-shim from 2.0.0 to 3.0.0 ([#40](https://github.com/ductran95/bin-links/issues/40)) ([36a652f](https://github.com/ductran95/bin-links/commit/36a652f50c09c88447893305a8ed9ec2c2f27b85))
* cmd-shim@3.0.0 ([5640f35](https://github.com/ductran95/bin-links/commit/5640f35868fa4189647422f03f055c793f597677))
* mkdirp-infer-owner@2.0.0 ([3497240](https://github.com/ductran95/bin-links/commit/3497240c2c22090a728c45968a882bfa87b46226))
* write-file-atomic@4.0.0 ([#32](https://github.com/ductran95/bin-links/issues/32)) ([788d0ee](https://github.com/ductran95/bin-links/commit/788d0ee94841b20651d300acb4b1ca607192efcd))

## [3.0.3](https://github.com/npm/bin-links/compare/v3.0.2...v3.0.3) (2022-08-23)


### Dependencies

* bump npm-normalize-package-bin from 1.0.1 to 2.0.0 ([#50](https://github.com/npm/bin-links/issues/50)) ([3ffe1e9](https://github.com/npm/bin-links/commit/3ffe1e9192575bebaf5ec0860fa2f90ca03ba3fe))

## [3.0.2](https://github.com/npm/bin-links/compare/v3.0.1...v3.0.2) (2022-08-11)


### Bug Fixes

* linting ([#48](https://github.com/npm/bin-links/issues/48)) ([163f021](https://github.com/npm/bin-links/commit/163f021115b7d724759ab7bdd878aabc2b5a94dd))

### [3.0.1](https://github.com/npm/bin-links/compare/v3.0.0...v3.0.1) (2022-04-05)


### Bug Fixes

* remove unsafe regex ([5d01244](https://github.com/npm/bin-links/commit/5d01244a178488b3e110b967a81e5c2349316bb3))
* replace deprecated String.prototype.substr() ([#38](https://github.com/npm/bin-links/issues/38)) ([56dbfa0](https://github.com/npm/bin-links/commit/56dbfa06ee1efc9224fa7e8b8cab71643feff664))


### Dependencies

* bump cmd-shim from 4.1.0 to 5.0.0 ([#39](https://github.com/npm/bin-links/issues/39)) ([24a1f3c](https://github.com/npm/bin-links/commit/24a1f3cfb5b98a9e58ff59c0627877a20762a7ed))
* bump read-cmd-shim from 2.0.0 to 3.0.0 ([#40](https://github.com/npm/bin-links/issues/40)) ([36a652f](https://github.com/npm/bin-links/commit/36a652f50c09c88447893305a8ed9ec2c2f27b85))

## [3.0.0](https://www.github.com/npm/bin-links/compare/v2.3.0...v3.0.0) (2022-01-18)


### ⚠ BREAKING CHANGES

* This drops support for node10 and non-LTS versions of node12 and node14

### Bug Fixes

* template-oss ([#30](https://www.github.com/npm/bin-links/issues/30)) ([3a50664](https://www.github.com/npm/bin-links/commit/3a5066464dc3497be7aaa39a19444494c41bc9a9))


### dependencies

* write-file-atomic@4.0.0 ([#32](https://www.github.com/npm/bin-links/issues/32)) ([788d0ee](https://www.github.com/npm/bin-links/commit/788d0ee94841b20651d300acb4b1ca607192efcd))

## 2.0.0

* Rewrite to promisify and remove dependence on gentle-fs

<a name="1.1.7"></a>
## [1.1.7](https://github.com/npm/bin-links/compare/v1.1.6...v1.1.7) (2019-12-26)


### Bug Fixes

* resolve folder that is passed in ([0bbd303](https://github.com/npm/bin-links/commit/0bbd303))



<a name="1.1.6"></a>
## [1.1.6](https://github.com/npm/bin-links/compare/v1.1.5...v1.1.6) (2019-12-11)


### Bug Fixes

* prevent improper clobbering of man/bin links ([642cd18](https://github.com/npm/bin-links/commit/642cd18)), closes [#11](https://github.com/npm/bin-links/issues/11) [#12](https://github.com/npm/bin-links/issues/12)



<a name="1.1.5"></a>
## [1.1.5](https://github.com/npm/bin-links/compare/v1.1.4...v1.1.5) (2019-12-10)


### Bug Fixes

* don't filter out ./ man references ([b3cfd2e](https://github.com/npm/bin-links/commit/b3cfd2e))



<a name="1.1.4"></a>
## [1.1.4](https://github.com/npm/bin-links/compare/v1.1.3...v1.1.4) (2019-12-09)


### Bug Fixes

* sanitize and validate bin and man link targets ([25a34f9](https://github.com/npm/bin-links/commit/25a34f9))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/npm/bin-links/compare/v1.1.2...v1.1.3) (2019-08-14)



<a name="1.1.2"></a>
## [1.1.2](https://github.com/npm/bin-links/compare/v1.1.1...v1.1.2) (2018-03-22)


### Bug Fixes

* **linkMans:** return the promise! ([5eccc7f](https://github.com/npm/bin-links/commit/5eccc7f))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/npm/bin-links/compare/v1.1.0...v1.1.1) (2018-03-07)


### Bug Fixes

* **shebangs:** only convert CR when doing CRLF -> LF ([#2](https://github.com/npm/bin-links/issues/2)) ([43bf857](https://github.com/npm/bin-links/commit/43bf857))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/npm/bin-links/compare/v1.0.0...v1.1.0) (2017-11-20)


### Features

* **dos2unix:** Log the fact line endings are being changed upon install. ([e9f8a6f](https://github.com/npm/bin-links/commit/e9f8a6f))



<a name="1.0.0"></a>
# 1.0.0 (2017-10-07)


### Features

* **import:** initial extraction from npm ([6ed0bfb](https://github.com/npm/bin-links/commit/6ed0bfb))
* **initial commit:** README ([3fc9cf0](https://github.com/npm/bin-links/commit/3fc9cf0))

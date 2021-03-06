# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.2"></a>
## [2.0.2](https://github.com/cybozu/eslint-config/compare/v2.0.1...v2.0.2) (2018-09-12)


### Bug Fixes

* **deps:** update dependency babel-eslint to v9 ([#30](https://github.com/cybozu/eslint-config/issues/30)) ([7de8f7b](https://github.com/cybozu/eslint-config/commit/7de8f7b))
* **deps:** update dependency eslint-plugin-import to ^2.14.0 ([#27](https://github.com/cybozu/eslint-config/issues/27)) ([7983f6a](https://github.com/cybozu/eslint-config/commit/7983f6a))
* **deps:** update dependency eslint-plugin-react to ^7.11.1 ([#29](https://github.com/cybozu/eslint-config/issues/29)) ([208f230](https://github.com/cybozu/eslint-config/commit/208f230))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/cybozu/eslint-config/compare/v2.0.0...v2.0.1) (2018-08-07)


### Bug Fixes

* **deps:** update dependency babel-eslint to ^8.2.6 ([#21](https://github.com/cybozu/eslint-config/issues/21)) ([db7856e](https://github.com/cybozu/eslint-config/commit/db7856e))
* **deps:** update dependency eslint-plugin-flowtype to ^2.50.0 ([#20](https://github.com/cybozu/eslint-config/issues/20)) ([a88c105](https://github.com/cybozu/eslint-config/commit/a88c105))
* **deps:** update dependency eslint-plugin-jsx-a11y to v6.1.1 ([9e25686](https://github.com/cybozu/eslint-config/commit/9e25686))



<a name="2.0.0"></a>
## [2.0.0](https://github.com/cybozu/eslint-config/compare/v1.1.0...v2.0.0) (2018-07-05)


### Chores

* **deps:** update eslint to v5 ([#13](https://github.com/cybozu/eslint-config/issues/13)) ([bd3402f](https://github.com/cybozu/eslint-config/commit/bd3402f))


### BREAKING CHANGES

* **deps:** use ESLint v5 as the peerDependencies


### Changes for rules

`getter-return` rule is included in `eslint:recommended`, so I remove the setting in `base.js`.
It affects the setting for `getter-return`.
Previously, `getter-return` accepted an implicit return like this.

```js
get name() {
    return;
}
```

But this is no longer allowed. You should return undefined explicitly.

```js
get name() {
    return undefined;
}
```

`no-self-assign` rule enables props option by default.
So this code is an error.

```js
obj.a = obj.a;
```

https://eslint.org/docs/user-guide/migrating-to-5.0.0



<a name="1.1.0"></a>
## [1.1.0](https://github.com/cybozu/eslint-config/compare/v1.0.1...v1.1.0) (2018-06-13)


### Features

* add presets/es5 and presets/es5-prettier ([939909b](https://github.com/cybozu/eslint-config/commit/939909b))



<a name="1.0.0"></a>
## 1.0.0 (2018/05/29)

* OSS:rocket::rocket::rocket:

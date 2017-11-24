
<div align="center">
<img src="https://camo.githubusercontent.com/462f24153b8e8739c8ea71f7102585c4cb0e1575/68747470733a2f2f63646e2e7261776769742e636f6d2f456c656d6546452f656c656d656e742f6465762f656c656d656e745f6c6f676f2e737667" width="250" height="100" align="center">
<img src="https://angular.cn/assets/images/logos/angular/angular.svg" width="90" height="90" align="center">
</div>

<h2 align="center"> Element for Angular </h2>

[![npm version](https://badge.fury.io/js/element-angular.svg)](https://badge.fury.io/js/element-angular)
[![npm](https://img.shields.io/npm/dt/element-angular.svg)](http://npm-stat.com/charts.html?package=v2ex-cli)
[![Join the chat at https://gitter.im/element-angular/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/element-angular/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Catalog

-  [Documentation](#documentation)
-  [Getting Started](#getting-started)
-  [Contribution](#contribution)
-  [Support](#support)
-  [LICENSE](#license)


## Documentation

[element-angular](https://element-angular.faas.ele.me)


## Getting Started
1. Install:
```bash
# install
npm i --save element-angular
```
2. Usage:
```typescript
// improt module
import { ElModule } from 'element-angular'

// import styles
// if you use webpack, in app.module.ts:
import 'element-angular/theme/index.css'

// or anglar-cli, in /angular-cli.json:
{
  "app": [{
    "styles": [
      "../node_modules/element-angular/theme/index.css"
    ],
    // other configurations...
  }]
}

// or other, in /src/styles.css:
@import "~element-angular/theme/index.css"

```

More: [Doc](https://element-angular.faas.ele.me)



## Contribution

- [Contribution Guide](https://github.com/eleme/element-angular/blob/master/.github/CONTRIBUTING.en-US.md)

- [贡献指南](https://github.com/eleme/element-angular/blob/master/.github/CONTRIBUTING.zh-CN.md)



## Support

Modern browsers and Internet Explorer 9+.


## LICENSE

**MIT**

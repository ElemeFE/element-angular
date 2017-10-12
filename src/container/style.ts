const container = `
.el-container {display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}
.is-vertical {flex-direction: column;}
`
const header = `
.el-header {background-color: #b3c0d1;color: #333;line-height: 60px;padding: 0 20px;box-sizing: border-box;}
`
const main = `
.el-main {flex: 1;padding: 20px;overflow: auto;box-sizing: border-box;}
`
const footer = `
.el-footer {background-color: #b3c0d1;color: #333;line-height: 60px;adding: 0 20px;box-sizing: border-box;}
`
const aside = `
.el-aside {color: #333;overflow: auto;box-sizing: border-box;}
`
export {
  container,
  header,
  main,
  footer,
  aside,
}

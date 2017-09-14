export default [
// 安装
`
# npm i --save element-angular

`,

// 引入 webpack
`
// import module
import { ElModule } from 'element-angular'

// if you use webpack, import style
import 'element-theme-default'

@NgModule({
  imports: [
    ElModule.forRoot(),
    ...
  ],
    ...
  bootstrap: [ExAppComponent],
})

// components
template: '<el-button>Hello World</el-button>'

`,

// angular-cli
`
// in /src/styles.css
// add code:

/* You can add global styles to this file, and also import other style files */
@import "~element-theme-default";


`,

]

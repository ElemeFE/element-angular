export default [
// 安装
`
# npm i --save element-angular

`,

// 引入 webpack
`
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import module
import { ElModule } from 'element-angular'

// if you use webpack, import style
import 'element-angular/theme/index.css'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
@import "~element-angular/theme/index.css";


`,

// angular-cli2
`
// in /angular-cli.json
// improve config :

{
  "app": [{
    "styles": [
      "../node_modules/element-angular/theme/index.css"
    ],
    // other configurations...
  }]
}

`,

]

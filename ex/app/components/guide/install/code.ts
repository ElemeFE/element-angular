export default [
// 安装
`
# npm i --save element-angular

`,

// 引入
`
// import module
import { ElModule } from 'element-angular'

// import style
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

]

export default [
// 安装
`
# install cli
npm install -g @angular/cli

# init project
ng new YOUR-PROJECT-NAME --style=scss
cd YOUR-PROJECT-NAME

# install element-angular
npm i --save element-angular

# run
ng server

`,

// 引入

`
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'

import { ElModule } from 'element-angular'

@NgModule({
  declarations: [
    ExAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
  ],
  providers: [],
  bootstrap: [ExAppComponent],
})
export class AppModule {
}

// 不同组件与指令使用请参考具体章节
`,

// 单个组件引入
`
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MenuComponent } from './menu/menu.component'

import { ElChildModules } from 'element-angular'

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ElChildModules.ElButton,          // just import button module
  ],
  exports: [ExGuideMainComponent],
  providers: [],
})
export class MenuModule {
}

`,

]

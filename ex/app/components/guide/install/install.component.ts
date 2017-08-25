import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss'],
})
export class ExInstallComponent implements OnInit {
  
  private exampleCode1: string = '# npm i --save element-angular'
  private exampleCode2: string =
`// app.module.ts
import { ElModule } from 'element-angular'

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
`
  private page: any = {
    previous: { name: '' },
    next: { name: '快速开始', link: '/guide/start' },
  }
  
  constructor(
  ) {
  }
  
  ngOnInit(): void {
  }
}

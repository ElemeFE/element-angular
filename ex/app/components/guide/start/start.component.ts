import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class ExStartComponent implements OnInit {
  
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
    previous: { name: '安装', link: '/guide/install' },
    next: { name: '国际化', link: '/guide/install' },
  }
  constructor(
  ) {
  }
  
  ngOnInit(): void {
    
    // (<any>window).hljs.highlightBlock(this.el.nativeElement.querySelector('#typescript').nodeValue)
  }
}

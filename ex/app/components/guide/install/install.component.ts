import { Component, OnInit } from '@angular/core'
import * as hljs from 'highlight.js'

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
  
  constructor(
  ) {
  }
  
  ngOnInit(): void {
    
    // (<any>window).hljs.highlightBlock(this.el.nativeElement.querySelector('#typescript').nodeValue)
  }
}

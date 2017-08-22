import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ex-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExLayoutComponent implements OnInit {
  
  private page: any = {
    previous: { name: '更新日志', link: '/guide/log' },
    next: { name: 'Button 按钮', link: '/basic/button' },
  }
  private code: string = `
<div el-row justify="center" align="middle" type="flex">
  <span el-col span="12" class="grid-content bg-purple" xs="4">
    test1
  </span>
    <span el-col span="12" class="grid-content bg-purple-light">
    test1
  </span>
</div>
`
  
  ngOnInit(): void {
  }
}

import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-select',
  templateUrl: './select.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExSelectComponent {
  
  private exClass: any = class {
    value: any
    foods:any = [{value: '选项1',label: '黄金糕' },
      { value: '选项2', label: '双皮奶' },
      { value: '选项3', label: '蚵仔煎' },
      { value: '选项4', label: '龙须面' },
      { value: '选项5', label: '北京烤鸭' }]
    
    handle(event: any):void {
      this.value = event
      console.log(event, this.value)
    }
  
    clear(): void {
      this.value = null
    }
  }
  private code: string[] = code
  private page: any = {
    previous: { name: 'InputNumber 计数器', link: '/form/input-number' },
    next: {  name: 'Cascader 级联选择器', link: '/form/cascader' },
  }

}

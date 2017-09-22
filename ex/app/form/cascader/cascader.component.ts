import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-cascader-demo',
  template: ` `,
})
export class ExCascaderDemoComponent {
  private options: any[] = [{
    value: 'zhinan',
    label: '指南',
    children: [{
      value: 'shejiyuanze',
      label: '设计原则',
      children: [{
        value: 'yizhi',
        label: '一致',
      }, {
        value: 'fankui',
        label: '反馈',
      }, {
        value: 'xiaolv',
        label: '效率',
      }, {
        value: 'kekong',
        label: '可控',
      }],
    }],
  }, {
    value: 'zujian',
    label: '组件',
    children: [{
      value: 'layout',
      label: 'Layout 布局',
    }, {
      value: 'color',
      label: 'Color 色彩',
    }, {
      value: 'typography',
      label: 'Typography 字体',
    }],
  }, {
    value: 'form',
    label: 'Form',
    children: [{
      value: 'radio',
      label: 'Radio 单选框',
    }, {
      value: 'checkbox',
      label: 'Checkbox 多选框',
    }, {
      value: 'input',
      label: 'Input 输入框',
    }, {
      value: 'input-number',
      label: 'InputNumber 计数器',
    }, {
      value: 'select',
      label: 'Select 选择器',
    }, {
      value: 'cascader',
      label: 'Cascader 级联选择器',
    }],
  }]
  private disabledOptions: any[] = [{
    value: 'disabled',
    label: 'disabled',
    disabled: true,
  }, {
    value: 'normal',
    label: 'normal',
  }]
  
  changeHandle(event: { path: string[], value: string }): void {
    console.log(event)
  }
}

@Component({
  selector: 'ex-cascader',
  templateUrl: './cascader.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExCascaderComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Select 选择器', link: '/form/select' },
    next: { name: 'Switch 开关', link: '/form/switch' },
  }
  
  private exClass: any = ExCascaderDemoComponent

}

export default [
// 基础用法
  `
<!--你可以通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<el-cascader [options]="options" (modelChange)="changeHandle($event)">
</el-cascader>

<script type="text">
  // in Component :
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
  
  changeHandle(event: { path: string[], value: string }): void {
    console.log(event)
  }
</script>

`,

// 禁用
`
<el-cascader [options]="disabledOptions">
</el-cascader>

<script type="text">
  // in Component :
  private disabledOptions: any[] = [{
    value: 'disabled',
    label: 'disabled',
    disabled: true,
  }, {
    value: 'normal',
    label: 'normal',
  }]
</script>
`,

// 仅展示最后一级
`
<el-cascader [options]="options"
  [all-levels]="false"
  (modelChange)="changeHandle($event)">
</el-cascader>

<script type="text">
  // in Component :
  changeHandle(event: { path: string[], value: string }): void {
    console.log(event)
  }
</script>
`,

// 默认值
`
<!--增加默认值需要输入每一层选项的 value-->
<el-cascader [options]="options"
  [model]="['zujian', 'layout']"
  (modelChange)="changeHandle($event)">
</el-cascader>
`,

// 选择即改变
`
<el-cascader [options]="options"
  [change-on-select]="true"
  (modelChange)="changeHandle($event)">
</el-cascader>
`,

]

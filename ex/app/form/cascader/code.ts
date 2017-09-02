export default [
// 基础用法
  `
<!--你可以通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<el-cascader [options]="options" (modelChange)="changeHandle($event)">
</el-cascader>

<script type="text">
  // in Component :
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

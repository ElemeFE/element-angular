export default [
// 基础用法
`
<el-date-picker (modelChange)="handle($event)"
  (clear-click)="clearClickHandle($event)">
</el-date-picker>

<script type="text">
// in component:

handle(time: number): void {
  // [time] is string
  // date style follow format props
  console.log(time)
}

</script>

`,

// 日期格式
`
<el-date-picker (modelChange)="handle($event)"
  [format]="'yyyy年MM月-dd日'">
</el-date-picker>
`,

// 隐藏日期
`
<el-date-picker (modelChange)="handle($event)"
  [format]="'yyyy - MM'" [hidden-day]="true">
</el-date-picker>
`,

// 禁用
`
<el-date-picker (modelChange)="handle($event)"
  [disabled]="true">
</el-date-picker>
`,
]

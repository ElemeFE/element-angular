export default [
// 基础用法
`
<!--你可以通过 [(model)] 进行双向绑定-->
<el-input-number [model]="val" (modelChange)="changeHandle($event)" [min]="1" [max]="10"></el-input-number>
`,

// 禁用
`
<el-input-number [model]="1" [disabled]="true"></el-input-number>
`,

// 步数
`
<el-input-number [model]="10" [step]="2"></el-input-number>
`,

// 尺寸
`
<el-input-number size="large" [model]="1"></el-input-number>

<el-input-number [model]="3"></el-input-number>

<el-input-number size="small" [model]="5"></el-input-number>

`,
]

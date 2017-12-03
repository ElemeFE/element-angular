export default [
// 百分比外显
`
<el-progress [percentage]="0"></el-progress>
<el-progress [percentage]="70"></el-progress>
<el-progress [percentage]="100" status="success"></el-progress>
<el-progress [percentage]="50" status="exception"></el-progress>
`,

// 百分比内显
`
<el-progress [text-inside]="true" [stroke-width]="18" [percentage]="0"></el-progress>
<el-progress [text-inside]="true" [stroke-width]="18" [percentage]="70"></el-progress>
<el-progress [text-inside]="true" [stroke-width]="18" [percentage]="100" status="success"></el-progress>
<el-progress [text-inside]="true" [stroke-width]="18" [percentage]="50" status="exception"></el-progress>
`,

// 环形

`
<el-progress type="circle" [percentage]="0"></el-progress>
<el-progress type="circle" [percentage]="25"></el-progress>
<el-progress type="circle" [percentage]="100" status="success"></el-progress>
<el-progress type="circle" [percentage]="50" status="exception"></el-progress>
`,
]

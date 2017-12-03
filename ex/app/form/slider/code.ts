export default [
// 基础用法
`
<!--你可以为 model 绑定布尔变量-->
<!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<el-slider (modelChange)="handle($event)">
</el-slider>

`,

// 初始值
`
<el-slider [model]="50">
</el-slider>
`,

// 隐藏提示框
`
<el-slider [show-tooltip]="false">
</el-slider>
`,

// 最小值与最大值
`
<el-slider [min]="10" [max]="50">
</el-slider>
`,

// 竖向
`
<el-slider [vertical]="true" [vertical-height]="200">
</el-slider>
`,
]

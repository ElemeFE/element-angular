export default [
// 基础用法
`
<!--你可以为 model 绑定布尔变量-->
<!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<el-switch [(model)]="value1" [on-text]="" [off-text]="">
</el-switch>
<el-switch [model]="true" [on-color]="'#13ce66'" [off-color]="'#ff4949'">
</el-switch>

`,

// 有禁用选项
`

<el-switch [(model)]="value1" [on-text]="" [off-text]=""
  [disabled]="true">
</el-switch>
<el-switch [(model)]="value2" [on-color]="'#13ce66'" [off-color]="'#ff4949'"
  [disabled]="true">
</el-switch>

`,

// 自定义图标
`

<el-switch [model]="true" [on-text]="" [off-text]=""
  [on-icon-class]="'el-icon-circle-check'" [off-icon-class]="'el-icon-circle-cross'">
</el-switch>


`,
]

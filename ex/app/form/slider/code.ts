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

]

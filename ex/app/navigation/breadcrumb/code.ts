export default [
// 基础用法
`
<el-breadcrumb separator="/">
  <el-breadcrumb-item to="">首页</el-breadcrumb-item>
  <el-breadcrumb-item to="">活动管理</el-breadcrumb-item>
  <el-breadcrumb-item to="">活动列表</el-breadcrumb-item>
  <el-breadcrumb-item to="/nav/breadcrumb">面包屑导航</el-breadcrumb-item>
</el-breadcrumb>
`,

// 手动设置
`
<!--当然，你也可以将 prevent 分别设置在 item 项上，详见文末属性参考-->
<el-breadcrumb (next)="handle($event)" [prevent]="true">
  <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
  <el-breadcrumb-item to="/2">活动管理</el-breadcrumb-item>
  <el-breadcrumb-item to="/list">活动列表</el-breadcrumb-item>
  <el-breadcrumb-item to="/test">面包屑导航</el-breadcrumb-item>
</el-breadcrumb>

<script src="text">
// in component:

handle(path: string): void {
  console.log(path)
}

</script>
`,

// 基础用法
`
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item to="">首页</el-breadcrumb-item>
  <el-breadcrumb-item to="">活动管理</el-breadcrumb-item>
  <el-breadcrumb-item to="">活动列表</el-breadcrumb-item>
  <el-breadcrumb-item to="/nav/breadcrumb">面包屑导航</el-breadcrumb-item>
</el-breadcrumb>
`,
]

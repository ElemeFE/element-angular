export default [
// 基础用法
`
<!-- 你可以为 [el-loading] 绑定一个变量-->
<!-- 默认将占满整个父级窗口 -->
<div [el-loading]="true">
  <el-tag>加载中..</el-tag>
</div>

`,

// 加载文字
`
<div class="demo" [el-loading]="true" [text]="'拼命加载中'">
  <el-tag>加载中..</el-tag>
</div>
`,

// 全局加载
`
<!--你还可以指定 [lock] 属性来禁止全局遮罩时的页面滚动-->
<el-button type="primary"
  (click)="handle()"
  [el-loading]="loading"
  [full-screen]="true">
  显示整页加载，3 秒后消失
</el-button>
`,

]

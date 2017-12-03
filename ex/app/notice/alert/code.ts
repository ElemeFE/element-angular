export default [
// 基础用法
`
<el-alert type="success">
  成功提示的文案
</el-alert>

<el-alert type="info">
  消息提示的文案
</el-alert>

<el-alert type="warning">
  警告提示的文案
</el-alert>

<el-alert type="error">
  错误提示的文案
</el-alert>
`,


// 自定义关闭
`
<el-alert type="success" [closable]="false">
  不可关闭的 alert
</el-alert>

<el-alert type="info" close-text="知道了">
  自定义 close-text
</el-alert>

<el-alert type="warning" (close)="handle()">
  携带回调函数的关闭按钮
</el-alert>
`,

// 图标
`
<el-alert type="success" [show-icon]="true">
  成功提示的文案
</el-alert>

<el-alert type="info" [show-icon]="true">
  消息提示的文案
</el-alert>

<el-alert type="warning" [show-icon]="true">
  警告提示的文案
</el-alert>

<el-alert type="error" [show-icon]="true">
  错误提示的文案
</el-alert>
`,

// 辅助文字
`
<el-alert type="success"
  description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
  通过属性设置辅助文字
</el-alert>

<el-alert type="success">
  通过 <code>template</code> 设置辅助文字
  <ng-template #description>
    <span>这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……</span>
  </ng-template>
</el-alert>
`,

]

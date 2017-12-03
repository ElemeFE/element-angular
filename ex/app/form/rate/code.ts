export default [
// 基础用法
`
<!--你可以为 model 绑定整数变量-->
<!--通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<div class="rate-demo">
  <div class="block">
    <span class="demonstration">默认不区分颜色</span>
    <el-rate [model]="4"></el-rate>
  </div>
  
  <div class="block">
    <span class="demonstration">区分颜色</span>
    <el-rate [model]="2"
      [colors]="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
  </div>
</div>
`,

// 辅助文字
`
<!--通过设置 [texts] 可以为每一个分值指定对应的辅助文字。-->
<!-- [texts] 为一个数组，长度应等于最大值 [max] -->
<el-rate [model]="3" [show-text]="true">
</el-rate>
`,

// 其他icon
`
<el-rate [model]="1"
  [icon-classes]="['el-icon-circle-check', 'el-icon-circle-check', 'el-icon-circle-check']"
  [void-icon-class]="'el-icon-circle-check'"
  [colors]="['#FF9900', '#FF9900', '#FF9900']">
</el-rate>
`,

// 只读
`
<el-rate
  [model]="3"
  [disabled]="true"
  [show-text]="true"
  [text-color]="'#ff9900'">
</el-rate>
`,
]

export default [
// 基础用法
`
<!--你可以为 model 绑定整数变量-->
<!--通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
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

`,
]

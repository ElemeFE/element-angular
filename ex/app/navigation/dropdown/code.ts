export default [
// 基础用法
`
<el-dropdown [model]="data">
  下拉菜单
</el-dropdown>

<script type="text">
// in component:
private data: any[] = [{
  value: 'huangjingao',
  label: '黄金糕',
}, {
  value: 'shizitou',
  label: '狮子头',
}, {
  value: 'luosifen',
  label: '螺蛳粉',
}]
</script>
`,

// 触发方式
`
<div el-row class="block-col-2">
  <div el-col span="12">
    <span class="demonstration">hover 激活</span>
    <el-dropdown [model]="data">
      下拉菜单
    </el-dropdown>
  </div>
  
  <div el-col span="12">
    <span class="demonstration">click 激活</span>
    <el-dropdown trigger="click" [model]="data">
      下拉菜单
    </el-dropdown>
  </div>
</div>
`,

// 禁用
`
<el-dropdown [model]="data2">
  下拉菜单
</el-dropdown>

<script type="text">
// in component:
private data2: any[] = [{
  value: 'huangjingao',
  label: '黄金糕',
}, {
  value: 'shizitou',
  label: '狮子头',
  disabled: true,
}, {
  value: 'luosifen',
  label: '螺蛳粉',
}]

</script>
`,

// 分割线
`
<el-dropdown [model]="data3">
  下拉菜单
</el-dropdown>

<script type="text">
// in component:
private data3: any[] = [{
  value: 'huangjingao',
  label: '黄金糕',
  divided: true,
}, {
  value: 'shizitou',
  label: '狮子头',
}, {
  value: 'luosifen',
  label: '螺蛳粉',
}]
</script>
`,

// 按钮
`
<el-dropdown [model]="data3"
  [split-button]="true"
  type="primary">
  下拉菜单
</el-dropdown>
`,
]

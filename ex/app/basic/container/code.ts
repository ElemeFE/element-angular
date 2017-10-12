export default [
// 基础的栅格布局
`
<div el-row>
  <div el-col span="24"><div class="grid-content bg-purple-dark"></div></div>
</div>
<div el-row>
  <div el-col span="12"><div class="grid-content bg-purple"></div></div>
  <div el-col span="12"><div class="grid-content bg-purple-light"></div></div>
</div>
<div el-row>
  <div el-col span="8"><div class="grid-content bg-purple"></div></div>
  <div el-col span="8"><div class="grid-content bg-purple-light"></div></div>
  <div el-col span="8"><div class="grid-content bg-purple"></div></div>
</div>
<div el-row>
  <div el-col span="6"><div class="grid-content bg-purple"></div></div>
  <div el-col span="6"><div class="grid-content bg-purple-light"></div></div>
  <div el-col span="6"><div class="grid-content bg-purple"></div></div>
  <div el-col span="6"><div class="grid-content bg-purple-light"></div></div>
</div>
<div el-row>
  <div el-col span="4"><div class="grid-content bg-purple"></div></div>
  <div el-col span="4"><div class="grid-content bg-purple-light"></div></div>
  <div el-col span="4"><div class="grid-content bg-purple"></div></div>
  <div el-col span="4"><div class="grid-content bg-purple-light"></div></div>
  <div el-col span="4"><div class="grid-content bg-purple"></div></div>
  <div el-col span="4"><div class="grid-content bg-purple-light"></div></div>
</div>
`,
// 分栏之间存在间隔
`
<div el-row gutter="20">
  <div el-col [span]="6">
    <div class="grid-content bg-purple"></div>
  </div>
  <div el-col span="6">
    <div class="grid-content bg-purple"></div>
  </div>
  <div el-col span="6">
    <div class="grid-content bg-purple"></div>
  </div>
  <div el-col span="6">
    <div class="grid-content bg-purple"></div>
  </div>
</div>
`,
// 复杂的混合布局
`
<div el-row gutter="20">
  <div el-col [span]="16"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="8"><div class="grid-content bg-purple"></div></div>
</div>
<div el-row :gutter="20">
  <div el-col [span]="8"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="8"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>
</div>
<div el-row :gutter="20">
  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="16"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>
</div>
`,
// 对齐方式
`
<div el-row type="flex" class="row-bg">
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
<div el-row type="flex" class="row-bg" justify="center">
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
<div el-row type="flex" class="row-bg" justify="end">
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
<div el-row type="flex" class="row-bg" justify="space-between">
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
<div el-row type="flex" class="row-bg" justify="space-around">
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
`
]

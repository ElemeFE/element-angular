export default [
// 基础的栅格布局
`
<div el-container direction="vertical" class="demo-box">
  <div el-header>Header</div>
  <div el-main>Main</div>
</div>

<div el-container direction="vertical" class="demo-box">
  <div el-header>Header</div>
  <div el-main>Main</div>
  <div el-footer>Footer</div>
</div>


<div el-container direction="vertical" class="demo-box">
  <div el-header>Header</div>
  <div el-container>
    <div el-aside width="200px">Aside</div>
    <div el-main>Main</div>
  </div>
</div>

<div el-container direction="vertical" class="demo-box">
  <div el-header>Header</div>
  <div el-container>
    <div el-aside width="200px">Aside</div>
    <div el-container direction="vertical">
      <div el-main>Main</div>
      <div el-footer>Footer</div>
    </div>
  </div>
</div>

<div el-container class="demo-box">
  <div el-aside width="200px">Aside</div>
  <div el-container direction="vertical">
    <div el-header>Header</div>
    <div el-main>Main</div>
  </div>
</div>

<div el-container class="demo-box">
  <div el-aside width="200px">Aside</div>
  <div el-container direction="vertical">
    <div el-header>Header</div>
    <div el-main>Main</div>
    <div el-footer>Footer</div>
  </div>
</div>
`,
]

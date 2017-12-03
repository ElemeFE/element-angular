export default [
// 基础用法
`
<el-menu theme="dark" [model]="0" class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2" title="我的工作台">
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://github.com/eleme/element-angular" target="_blank">GITHUB</a></el-menu-item>
</el-menu>

<el-menu [model]="0" class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2" title="我的工作台">
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://github.com/eleme/element-angular" target="_blank">GITHUB</a></el-menu-item>
</el-menu>
`,
  
`
<div el-row class="tac">
  <div el-col span="8">
    <h5>带 icon</h5>
    <el-menu model="2" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <ng-template #title>
          <i class="el-icon-message"></i>导航一
        </ng-template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4" title="选项4">
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </div>
  <div el-col span="8">
    <h5>不带 icon</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
      <el-submenu index="1" title="导航一">
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4" title="选项4">
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
  </div>
  <div el-col span="8">
    <h5>分组</h5>
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
      <el-menu-item-group title="分组一">
        <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组二">
        <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</div>
`,

]

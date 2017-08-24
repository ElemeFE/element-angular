export default [
// 基础用法
`
<!--绑定的 model 与 label 值相同时就会被选中-->
<el-radio class="radio" [(model)]="radio" label="备选1">备选项</el-radio>

<el-radio class="radio" [(model)]="radio" label="备选2"></el-radio>

<el-radio class="radio" [(model)]="radio" label="备选3">备选3</el-radio>

`,

// 禁用状态
`
<!--你可以拆分 model 达到不同的用途：-->
<!--单独使用 '[]' 来标记输入组件的值，甚至可以不声明变量-->
<!--单独使用 '(modelChange)' 来获取组件返回的变化-->
<el-radio [disabled]="true" [model]="'element'" label="element">备选项</el-radio>

<el-radio [disabled]="true" [(model)]="element2" label="element">备选项</el-radio>

`,

// 单选框组
`
<el-radio-group [model]="'3'">
  <el-radio label="3">备选项</el-radio>
  <el-radio label="6">备选项</el-radio>
  <el-radio label="9">备选项</el-radio>
</el-radio-group>
`,

// 按钮样式
`
<el-radio-group [model]="'上海'">
  <el-radio-button label="上海"></el-radio-button>
  <el-radio-button label="北京"></el-radio-button>
  <el-radio-button label="广州"></el-radio-button>
  <el-radio-button label="深圳"></el-radio-button>
</el-radio-group>
<div style="margin: 15px 0;"></div>

<el-radio-group [model]="'Angular'">
  <el-radio-button label="Angular"></el-radio-button>
  <el-radio-button label="React"></el-radio-button>
  <el-radio-button label="Bootstrap" :disabled="true"></el-radio-button>
  <el-radio-button label="Vue"></el-radio-button>
</el-radio-group>
<div style="margin: 15px 0;"></div>

<el-radio-group [model]="'北京'" :disabled="true">
  <el-radio-button label="上海"></el-radio-button>
  <el-radio-button label="北京"></el-radio-button>
  <el-radio-button label="广州"></el-radio-button>
  <el-radio-button label="深圳"></el-radio-button>
</el-radio-group>
`,
]

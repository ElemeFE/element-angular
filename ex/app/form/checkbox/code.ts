export default [
// 基础用法
`
<!-- 'checked' 为 true 或 false -->
<el-checkbox [model]="val" (modelChange)="handle($event)">备选项</el-checkbox>

`,

// 禁用
`
<el-checkbox [model]="checked1" [disabled]="true">备选项1</el-checkbox>
<el-checkbox [model]="checked2" [disabled]="true">备选项2</el-checkbox>
`,

// 多选框组
`
<!--当组件中无值时，label 属性的值也会用于显示-->
<el-checkbox-group [model]="['复选框 B', '选中且禁用']" (modelChange)="handle($event)">
  <el-checkbox label="复选框 A"></el-checkbox>
  <el-checkbox label="复选框 B">复选框 F</el-checkbox>
  <el-checkbox label="复选框 C"></el-checkbox>
  <el-checkbox label="禁用" [disabled]="true"></el-checkbox>
  <el-checkbox label="选中且禁用" [disabled]="true"></el-checkbox>
</el-checkbox-group>
`,

// 限制数量
`
<!--min 与 [min] 并不是等价的，具体请参见 Angular 官方文档-->
<el-checkbox-group [model]="['Java', 'TypeScript']" [min]="1" max="2">
  <el-checkbox label="Java"></el-checkbox>
  <el-checkbox label=".NET">复选框 F</el-checkbox>
  <el-checkbox label="C++"></el-checkbox>
  <el-checkbox label="JavaScript" [disabled]="true"></el-checkbox>
  <el-checkbox label="TypeScript" [disabled]="true"></el-checkbox>
</el-checkbox-group>

`,

// 按钮样式
`
<div style="margin: 15px 0;"></div>
<el-checkbox-group [model]="['Java', 'TypeScript', 'Swift']">
  <el-checkbox-button *ngFor="let city of ['Hello', 'TypeScript', 'CSS']"
    [label]="city"></el-checkbox-button>
</el-checkbox-group>

<div style="margin: 15px 0;"></div>
<el-checkbox-group [model]="['Hegel', 'Aristotle', 'Dewey']" size="small">
  <el-checkbox-button *ngFor="let man of ['Hegel', 'Aristotle', 'Dewey']"
    [label]="man" [disabled]="man === 'Aristotle'">{{man}}</el-checkbox-button>
</el-checkbox-group>
`,
]

export default [
// 基础用法
`
<!--当设置 value 初始值属性后，会覆盖 placeholder-->
<!--你可以通过 [(model)] 进行双向绑定-->
<el-input [model]="input" placeholder="请输入内容"></el-input>

`,

// 禁用状态
`
<el-input placeholder="请输入内容"
  [model]="input1"
  [disabled]="true">
</el-input>
`,

// 图标

`
<!--你可以使用 (icon-click)=Function 来得到图标点击的事件-->
<el-input placeholder="请选择日期"
  icon="search"
  [model]="input2">
</el-input>
`,

// 文本域
`
<el-input type="textarea"
  [rows]="2"
  placeholder="请输入内容"
  [model]="textarea">
</el-input>
`,

// 自动高度
`
<el-input type="textarea"
  autosize
  placeholder="固定高度文本域"
  [model]="textarea2">
</el-input>

<div style="margin: 20px 0;"></div>

<el-input type="textarea"
  [autosize]="{ minRows: 2, maxRows: 4}"
  placeholder="自动调整高度 { minRows: 2, maxRows: 4 }"
  [model]="textarea3">
</el-input>
`,

// 复合型
`
<div>
  <el-input placeholder="请输入内容" [model]="input3">
    <ng-template #prepend>
      <span>Http://</span>
    </ng-template>
  </el-input>
</div>

<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" [model]="input4">
    <ng-template #append>
      <span>.com</span>
    </ng-template>
  </el-input>
</div>

`,

// 尺寸
`
<div class="demo-input-size">

  <el-input size="large" placeholder="请输入内容" [model]="input6">
  </el-input>
  
  <el-input placeholder="请输入内容" [model]="input7">
  </el-input>
  
  <el-input size="small" placeholder="请输入内容" [model]="input8">
  </el-input>
  
  <el-input size="mini" placeholder="请输入内容" [model]="input9">
  </el-input>
  
</div>
`,

]

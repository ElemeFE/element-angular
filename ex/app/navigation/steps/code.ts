export default [
// 基础用法
`
<!--[active] 的值标识当前的进度 它是一个整数-->
<div class="demo">
  <el-steps [active]="active" [finish-status]="'success'">
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3"></el-step>
  </el-steps>
</div>
<el-button (click)="handle()">next</el-button>
`,

// 状态条
`
<el-steps space="150px" [active]="1" [finish-status]="'success'">
  <el-step title="已完成"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
`,

// 描述
`
<el-steps  [active]="1" [align-center]="true">
  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
`,

// 图标
`
<el-steps [active]="1">
  <el-step title="步骤 1" icon="edit"></el-step>
  <el-step title="步骤 2" icon="upload"></el-step>
  <el-step title="步骤 3" icon="picture"></el-step>
</el-steps>

`,

// 竖向
`
<el-steps space="120px" [active]="1" direction="vertical" [finish-status]="'success'">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
`,

// 简洁风格
`
<el-steps [active]="1" [simple]="true">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
`,
]

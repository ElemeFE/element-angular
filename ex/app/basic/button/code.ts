export default [
// 基础的按钮用法
`
<el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="text">文字按钮</el-button>
<el-button>文字按钮</el-button>
<el-button [round]="true">文字按钮</el-button>
`,
// 按钮不可用状态
`
<el-button [plain]="true" [disabled]="true">主要按钮</el-button>
<el-button type="primary" [disabled]="true">主要按钮</el-button>
<el-button type="text" [disabled]="true">文字按钮</el-button>
`,

// 颜色倾向
`
<div class="block">
  <span class="demonstration">默认显示颜色</span>
  <span class="wrapper">
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
  </span>
</div>
<div class="block">
  <span class="demonstration">hover 显示颜色</span>
  <span class="wrapper">
    <el-button [plain]="true" type="success">成功按钮</el-button>
    <el-button [plain]="true" type="warning">警告按钮</el-button>
    <el-button [plain]="true" type="danger">危险按钮</el-button>
    <el-button [plain]="true" type="info">信息按钮</el-button>
  </span>
</div>
`,

// 图标按钮
`
<el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="share"></el-button>
<el-button type="primary" icon="delete"></el-button>
<el-button type="primary" icon="search">搜索</el-button>
<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
`,

// 按钮组
`
<el-button-group>
  <el-button type="primary" icon="arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="share"></el-button>
  <el-button type="primary" icon="delete"></el-button>
</el-button-group>
`,

// 加载中
`
<el-button type="primary" [loading]="true">加载中</el-button>
`,

// 不同尺寸
`
<el-button type="primary" size="large">大型按钮</el-button>
<el-button type="primary">正常按钮</el-button>
<el-button type="primary" size="small">小型按钮</el-button>
<el-button type="primary" size="mini">超小按钮</el-button>
`,
]


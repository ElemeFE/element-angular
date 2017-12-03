export default [
// 基础用法
`
<el-badge [model]="12" class="item">
  <el-button size="small">评论</el-button>
</el-badge>

<el-badge [model]="3" class="item">
  <el-button size="small">回复</el-button>
</el-badge>
`,

// 最大值
`
<el-badge [model]="200" [max]="99" class="item">
  <el-button size="small">评论</el-button>
</el-badge>

<el-badge [model]="100" [max]="10" class="item">
  <el-button size="small">回复</el-button>
</el-badge>
`,

// 自定义内容
`
<el-badge model="new" class="item">
  <el-button size="small">评论</el-button>
</el-badge>

<el-badge model="hot" class="item">
  <el-button size="small">回复</el-button>
</el-badge>
`,

// 小红点
`
<el-badge [is-dot]="true" class="item">数据查询</el-badge>

<el-badge [is-dot]="true" class="item">
  <el-button class="share-button" icon="share" type="primary"></el-button>
</el-badge>
`,
]

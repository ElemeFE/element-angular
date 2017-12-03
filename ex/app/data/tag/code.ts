export default [
// 基础用法
`
<el-tag>标签一</el-tag>
<el-tag type="gray">标签二</el-tag>
<el-tag type="primary">标签三</el-tag>
<el-tag type="success">标签四</el-tag>
<el-tag type="warning">标签五</el-tag>
<el-tag type="danger">标签六</el-tag>

`,

// 可移除
`
<el-tag *ngFor="let tag of [
{ name: '标签一', type: ''
},{ name: '标签二', type: 'gray'
},{ name: '标签三', type: 'primary'
},{ name: '标签四', type: 'success'
},{ name: '标签五', type: 'warning'
},{ name: '标签六', type: 'danger' }]"
  [closable]="true"
  [type]="tag.type">
  {{tag.name}}
</el-tag>
`,
]

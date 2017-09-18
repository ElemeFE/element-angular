export default [
// 基础用法
`

<el-table [model]="tableData">
  <el-table-column model-key="name" label="姓名" width="140">
  </el-table-column>
  <el-table-column model-key="date" label="日期" width="140">
  </el-table-column>
  <el-table-column model-key="address" label="地址">
  </el-table-column>
  <el-table-column model-key="1" label="操作" [slot-click]="handle">
    <ng-template #slot>
      <el-button type="text" size="small">删除</el-button>
    </ng-template>
  </el-table-column>
</el-table>

`,

]

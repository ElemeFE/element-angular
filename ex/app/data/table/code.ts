export default [
// 基础用法
`
<el-table [model]="tableData" [scroll-x]="true" center="all">
  <el-table-column model-key="name" label="姓名" width="140">
  </el-table-column>
  <el-table-column model-key="date" label="日期" width="140">
  </el-table-column>
  <el-table-column model-key="address" label="地址" width="140">
  </el-table-column>
   <el-table-column label="操作" width="120">
    <ng-template #slot let-scope="scope">
      <el-button type="text" size="small" (click)="handle(scope)">删除</el-button>
    </ng-template>
  </el-table-column>
   <el-table-column label="操作" width="120">
    <ng-template #slot let-scope="scope">
      <el-button type="text" size="small" (click)="handle(scope)">删除</el-button>
    </ng-template>
  </el-table-column>
</el-table>

<script type="text">
// in component
private tableData: any[] = [{
  name: '水爷',
  date: '2017-08-19',
  address: '上海市普陀区金沙江路 1518 弄',
}, {
  name: '水爷',
  date: '2017-08-20',
  address: '上海市普陀区金沙江路 1518 弄',
}, {
  name: '水爷',
  date: '2017-08-21',
  address: '上海市普陀区金沙江路 1518 弄',
}, {
  name: '水爷',
  date: '2017-08-22',
  address: '上海市普陀区金沙江路 1510 弄',
}]
</script>
`,

// 斑马纹表格
`
<el-table [model]="tableData" [stripe]="true">
  <el-table-column model-key="name" label="姓名" width="140">
  </el-table-column>
  <el-table-column model-key="date" label="日期" width="140">
  </el-table-column>
  <el-table-column model-key="address" label="地址">
  </el-table-column>
</el-table>

`,

// 边框
`
<el-table [model]="tableData" [border]="true">
  <el-table-column model-key="name" label="姓名" width="140">
  </el-table-column>
  <el-table-column model-key="date" label="日期" width="140">
  </el-table-column>
  <el-table-column model-key="address" label="地址">
  </el-table-column>
</el-table>
`,

// 带状态
`
<el-table [model]="tableData" [row-class-name]="rowClassNameFilter">
  <el-table-column model-key="name" label="姓名" width="140">
  </el-table-column>
  <el-table-column model-key="date" label="日期" width="140">
  </el-table-column>
  <el-table-column model-key="address" label="地址">
  </el-table-column>
</el-table>

<script type="text">
// in component
rowClassNameFilter(row: any, index: number): string {
  if (index === 1) {
    return 'info-row';
  } else if (index === 3) {
    return 'positive-row';
  }
  return ''
}
</script>

<style type="text">
.el-table .info-row {
  background: #c9e5f5;
}

.el-table .positive-row {
  background: #e2f0e4;
}
</style>
`,

// 固定表头
`
<el-table [model]="tableDataMore" height="300px">
  <el-table-column model-key="name" label="姓名" width="150">
  </el-table-column>
  <el-table-column model-key="date" label="日期" width="150">
  </el-table-column>
  <el-table-column model-key="address" label="地址">
  </el-table-column>
</el-table>
`,

// 插入按钮
`
<el-table [model]="tableData">
  <el-table-column model-key="name" label="姓名" width="120">
  </el-table-column>
  <el-table-column model-key="date" label="日期" width="120">
  </el-table-column>
  <el-table-column model-key="address" label="地址" >
  </el-table-column>
  <el-table-column label="操作" width="120">
    <ng-template #slot let-scope="scope">
      <el-button type="text" size="small" (click)="handle(scope)">删除</el-button>
    </ng-template>
  </el-table-column>
</el-table>

<script type="text">
// in component
handle(ref: any): void {
  // console.log(ref.index)
  // console.log(ref.rowData)
  // console.log(ref.innerHTML)
  ref.destroy()
}
</script>
`,

// 多级表头
`
<el-table [model]="tableDataMore" [border]="true">
  <el-table-column model-key="name" label="姓名" width="150">
  </el-table-column>
  
  <el-table-column label="其他信息">
    <el-table-column model-key="date" label="日期" width="150"></el-table-column>
    <el-table-column model-key="address" label="地址"></el-table-column>
  </el-table-column>
  
</el-table>

`,

]

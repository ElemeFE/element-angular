export default [
// 基础用法
`
<div class="pagination-demo">
  <div class="block">
    <span class="demonstration">页数较少时的效果</span>
    <el-pagination [total]="50"
    [layout]="['prev', 'pager', 'next']">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">大于 7 页时的效果</span>
    <el-pagination [total]="200"
    [layout]="['prev', 'pager', 'next']">
    </el-pagination>
  </div>
</div>
`,

// 小型
`
<el-pagination [total]="50"
  [small]="true">
</el-pagination>
`,

// 附加功能
`
<ul class="list">
<li>
<span>显示总数</span>
<el-pagination [total]="50"
[layout]="['prev', 'pager', 'next', 'total']">
</el-pagination>
</li>

<li>
  <span>调整每页显示条数</span>
  <el-pagination [total]="500"
    [page-size]="20"
    [layout]="['prev', 'pager', 'next', 'size']">
  </el-pagination>
</li>

<li>
  <span>直接前往</span>
  <el-pagination [total]="500"
    [layout]="['prev', 'pager', 'next', 'jumper']">
  </el-pagination>
</li>

<li>
  <span>完整功能</span>
  <el-pagination [total]="40"
    [layout]="['prev', 'pager', 'next', 'jumper', 'size', 'total']">
  </el-pagination>
</li>
</ul>


`,

]

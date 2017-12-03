export default [
// 基础用法
`
<!-- 你可以通过 [(model)] 来指定一个初始值 -->
<!-- 同时获得所有值变更的推送 -->
<el-carousel height="150px">
  <el-carousel-item *ngFor="let item of ['第一个', '第二个', '第三个']">
    <div class="small">
      <h3>{{item}}</h3>
    </div>
  </el-carousel-item>
</el-carousel>

`,

// 指示器
`
<el-carousel height="300px" indicator-position="outside">
  <el-carousel-item *ngFor="let item of ['第一个', '第二个', '第三个']">
    <h3>{{item}}</h3>
  </el-carousel-item>
</el-carousel>
`,

// 切换箭头
`
<el-carousel height="150px" arrow="always">
  <el-carousel-item *ngFor="let item of ['第一个', '第二个', '第三个']">
    <div class="small">
      <h3>{{item}}</h3>
    </div>
  </el-carousel-item>
</el-carousel>
`,

// 标签
`
<el-carousel height="150px">
  <el-carousel-item *ngFor="let item of ['第一个', '第二个', '第三个']; let i = index"
    [label]="'label' + i">
    <div class="small">
      <h3>{{item}}</h3>
    </div>
  </el-carousel-item>
</el-carousel>
`,

]

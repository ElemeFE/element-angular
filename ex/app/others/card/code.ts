export default [
// 基础用法
`
<el-card class="box-card">
  <ng-template #header>
    <div class="clearfix">
      <span style="line-height: 36px;">卡片名称</span>
      <el-button style="float: right;" type="primary">操作按钮</el-button>
    </div>
  </ng-template>
  <div *ngFor="let item of [0, 1, 2, 4]" class="text item">
    {{'列表内容 ' + item }}
  </div>
</el-card>
`,

// 简单卡片
`
<el-card class="box-card">
  <div *ngFor="let item of [0, 1, 2, 4]" class="text item">
    {{'列表内容 ' + item }}
  </div>
</el-card>

`,

// 带图片
`
<div el-row>
  <div el-col span="8" *ngFor="let item of [0, 1]" [offset]="item > 0 ? 2 : 0">
    <el-card body-style="padding: 0px">
      <img src="http://element.eleme.io/1.4/static/hamburger.50e4091.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate() | date: 'dd/MM/yyyy' }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </div>
</div>
`,
]

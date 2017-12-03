export default [
// 基础用法
  `
<!--你可以通过 model 来获取每次选择的值-->
<!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<el-select [model]="value" placeholder="请选择" (modelChange)="handle($event)">
  <el-option *ngFor="let item of foods"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
<el-button (click)="clear()">clear</el-button>

<script type="text">

// in component

handle(event: any):void {
  this.value = event
  console.log(event, this.value)
}

clear(): void {
  this.value = null
}

</script>
`,

// 有禁用选项
`
<el-select [(model)]="value" placeholder="请选择">
  <el-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
      { value: '选项2', label: '双皮奶' },
      { disabled: true, value: '选项3', label: '蚵仔煎' },
      { value: '选项4', label: '龙须面' },
      { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [disabled]="item.disabled"
    [value]="item.value">
  </el-option>
</el-select>
`,

// 禁用 select
`
<el-select [model]="'选项2'" [disabled]="true">
  <el-option *ngFor="let item of [{value: '选项1',label: '黄金糕' }]"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
`,

// 默认选中
`
<el-select [model]="'选项2'">
  <el-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
      { value: '选项2', label: '双皮奶' },
      { disabled: true, value: '选项3', label: '蚵仔煎' },
      { value: '选项4', label: '龙须面' },
      { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
`,

// 有清空按钮
`
<el-select [(model)]="value" [clearable]="true">
  <el-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
      { value: '选项2', label: '双皮奶' },
      { disabled: true, value: '选项3', label: '蚵仔煎' },
      { value: '选项4', label: '龙须面' },
      { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>
`,
]

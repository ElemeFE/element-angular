export default [
// 基础用法
  `
<!--你可以通过 model 来获取每次选择的值-->
<!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<el-select [(model)]="value" placeholder="请选择">
  <el-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
      { value: '选项2', label: '双皮奶' },
      { value: '选项3', label: '蚵仔煎' },
      { value: '选项4', label: '龙须面' },
      { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [value]="item.value">
  </el-option>
</el-select>

`,

]

export default [
// 基础用法
`
<el-button [plain]="true" (click)="handle()">
  尝试
</el-button>

<!--组件中使用: -->
<script type="text">
  import { ElNotificationService } from 'element-angular'
  // ...
  
  constructor(
    private notify: ElNotificationService,
  ) {
  }
  
  // ...
  
  handle(): void {
    this.notify.show('这是一条消息提示')
  }
</script>
`,
  
  // 基础用法
`
<el-button [plain]="true" (click)="handle2()">
  尝试
</el-button>

<!--组件中使用: -->
<script type="text">
  // ...
  
  handle2(): void {
    this.notify.show('这是一条消息提示', '消息标题')
  }
</script>
`,
  
// 不同类型
`
<el-button [plain]="true" (click)="handle3('success')">成功</el-button>
<el-button [plain]="true" (click)="handle3('warning')">警告</el-button>
<el-button [plain]="true" (click)="handle3('info')">消息</el-button>
<el-button [plain]="true" (click)="handle3('error')">错误</el-button>

<!--组件中使用: -->
<script type="text">
  
  handle3(type: string): void {
    this.notify[type]('这是一条消息提示: ' + type, type)
  }
</script>
`,

// 引用说明
`
import { ElNotificationService } from 'element-angular'
// ...

constructor(
  private notify: ElNotificationService,
) {
}

// 可以通过 setOptions 来设置更多的选项 (具体参数参见下文)

handle(): void {
  this.notify.setOptions(config: {})
  this.notify.show('一条经过设置的消息')
}

`,

]

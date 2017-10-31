export default [
// 基础用法
`
<!--你可以从 [element-angular] 中引入 ElMessageService 并注入到自己的组件中-->
<!--使用 messageService.show('msg') 来触发一个提示-->
<el-button (click)="handle()">show</el-button>

<!--组件中使用: -->
<script type="text">
  import { ElMessageService } from 'element-angular'
  // ...
  
  constructor(
    private message: ElMessageService,
  ) {
  }
  
  // ...
  
  handle(): void {
    this.message.show('这是一条消息提示')
  }
</script>
`,

// 不同类型
`
<el-button [plain]="true" (click)="handle('success')">成功</el-button>
<el-button [plain]="true" (click)="handle('warning')">警告</el-button>
<el-button [plain]="true" (click)="handle('info')">消息</el-button>
<el-button [plain]="true" (click)="handle('error')">错误</el-button>

<!--组件中使用: -->
<script type="text">
  
  handle(type: string): void {
    this.message[type]('这是一条消息提示: ' + type)
  }
</script>
`,

// 可关闭
`
<el-button [plain]="true" (click)="handle2('success')">成功(可关闭)</el-button>
<el-button [plain]="true" (click)="handle2('error')">错误(可关闭)</el-button>

<!--组件中使用: -->
<script type="text">
  
  handle2(type: string): void {
    this.message.setOptions({ showClose: true })
    this.message[type]('这是一条可关闭的消息提示')
  }
</script>
`,

// 引用说明
`
import { ElMessageService } from 'element-angular'
// ...

constructor(
  private message: ElMessageService,
) {
}

`,

// 居中
`
<el-button [plain]="true" (click)="center()">居中</el-button>

<!--组件中使用: -->
<script type="text">
  
  handle(type: string): void {
    this.message[type]('这是一条消息提示: ' + type)
  }
</script>
`,

]

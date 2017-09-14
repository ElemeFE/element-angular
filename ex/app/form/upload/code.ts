export default [
// 基础用法
`
<el-upload action="http://jsonplaceholder.typicode.com/posts"
  [file-list]="fileList"
  (upload-filter)="limit500($event)">
  <ng-template #trigger>
    <el-button size="small" type="primary">点击上传2</el-button>
  </ng-template>
  <ng-template #tip>
    <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </ng-template>
</el-upload>

<script type="text">
// in component, file is native file

limit500(event: any): void {
  const file: File = event.file.raw
  if (file.size > 500000) {
    this.message.warn('文件超过了 500 kb.')
    event.reject()
  } else {
    event.next()
  }
}

</script>
`,

]

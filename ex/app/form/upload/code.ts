export default [
// 基础用法
`
<el-upload action="http://jsonplaceholder.typicode.com/posts"
  [file-list]="fileList"
  [upload-filter]="limit500.bind(this)">
  <ng-template #trigger>
    <el-button size="small" type="primary">点击上传2</el-button>
  </ng-template>
  <ng-template #tip>
    <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </ng-template>
</el-upload>

<script type="text">
// in component, file is native file

limit500(file: File): boolean {
  if (file.size > 500000) {
    this.message.info('文件超过了 500 kb.')
    return false
  }
  return true
}

</script>
`,

`
<el-upload class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  [show-file-list]="false"
  (success)="successHandle($event)"
  (error)="errorHandle($event)">
  <ng-template #trigger>
    <img *ngIf="imageUrl" [src]="imageUrl" class="avatar">
    <i *ngIf="!imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
  </ng-template>
</el-upload>

<script type="text">
// in component, file is native file

successHandle(file: any): void {
  this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file.raw))
  this.message.info('文件上传成功')
}

errorHandle(err: any): void {
  this.message.error('文件上传失败:' + err)
}

</script>
`,

// 照片墙
`
<el-upload action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  (preview)="previewHandle($event)"
  (remove)="removeHandle($event)">
  <ng-template #trigger>
    <i class="el-icon-plus"></i>
  </ng-template>
</el-upload>

<el-dialog [(visible)]="showDialog" size="tiny">
  <img width="100%" [src]="dialogImageUrl" alt="">
</el-dialog>
`,

// 缩略图
`
<el-upload class="avatar-uploader"
  [file-list]="fileList"
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture">
  <ng-template #trigger>
    <el-button size="small" type="primary">点击上传</el-button>
  </ng-template>
</el-upload>
`,

// 拖拽上传
`
<el-upload class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  [drag]="true"
  [multiple]="true">
  <ng-template #trigger>
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或
      <em>点击上传</em>
    </div>
  </ng-template>
</el-upload>
`,
]

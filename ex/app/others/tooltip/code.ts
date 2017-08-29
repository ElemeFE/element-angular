export default [
// 基础用法
`
<div class="box">
  <div class="top">
    <el-tooltip placement="top-start">
      <el-button>上左</el-button>
      <ng-template #tip><span>placement is top-start</span></ng-template>
    </el-tooltip>
    <el-tooltip placement="top">
      <el-button>上边</el-button>
      <ng-template #tip> <span>placement is top</span> </ng-template>
    </el-tooltip>
    <el-tooltip placement="top-end">
      <el-button>上右</el-button>
      <ng-template #tip><span>placement is top-end</span></ng-template>
    </el-tooltip>
  </div>

  <div class="left">
    <el-tooltip placement="left-start">
      <el-button>左上</el-button>
      <ng-template #tip><span>placement is left-start</span></ng-template>
    </el-tooltip>
    <el-tooltip placement="left">
      <el-button>左边</el-button>
      <ng-template #tip><span>placement is left</span></ng-template>
    </el-tooltip>
    <el-tooltip placement="left-end">
      <el-button>左下</el-button>
      <ng-template #tip><span>placement is left-end</span></ng-template>
    </el-tooltip>
  </div>

  <div class="right">
    <el-tooltip placement="right-start">
      <el-button>右上</el-button>
      <ng-template #tip><span>placement is right-start</span></ng-template>
    </el-tooltip>
    <el-tooltip placement="right">
      <el-button>右边</el-button>
      <ng-template #tip><span>placement is right</span></ng-template>
    </el-tooltip>
    <el-tooltip placement="right-end">
      <el-button>右下</el-button>
      <ng-template #tip><span>placement is right-end</span></ng-template>
    </el-tooltip>
  </div>

  <div class="bottom">
    <el-tooltip placement="bottom-start">
      <el-button>下左</el-button>
      <ng-template #tip><span>placement is bottom-start</span></ng-template>
    </el-tooltip>
    <el-tooltip placement="bottom">
      <el-button>下边</el-button>
      <ng-template #tip><span>placement is bottom</span></ng-template>
    </el-tooltip>
    <el-tooltip placement="bottom-end">
      <el-button>下右</el-button>
      <ng-template #tip> <span>placement is bottom-end</span> </ng-template>
    </el-tooltip>
  </div>
</div>
`,

// 主题
`
<el-tooltip placement="top">
  <el-button>Dark</el-button>
  <ng-template #tip>
    <span>Top center</span>
  </ng-template>
</el-tooltip>

<el-tooltip placement="bottom" effect="light">
  <el-button>Light</el-button>
  <ng-template #tip>
    <span>Bottom center</span>
  </ng-template>
</el-tooltip>
`,

// 禁用
`
<el-tooltip placement="bottom" [disabled]="true">
  <el-button>Disabled</el-button>
  <ng-template #tip>
    <span>Top center</span>
  </ng-template>
</el-tooltip>
`,
]

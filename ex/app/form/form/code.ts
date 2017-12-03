import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { forwardRef, Inject } from '@angular/core'

export default [
`
<el-form [formGroup]="validateForm" label-width="100px"
 [show-icon]="true" [show-message]="true" el-class="form-demo">

  <el-form-item label="邮箱" [required]="true"
    [status]="statusCtrl('mail')" [error]="messageCtrl('mail')">
    <el-input formControlName="mail"></el-input>
  </el-form-item>
  
  <el-form-item label="密码" [required]="true"
    [status]="statusCtrl('password')" [error]="messageCtrl('password')">
    <el-input formControlName="password" native-type="password"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" (click)="submit()">提交</el-button>
    <el-button (click)="reset()">重置</el-button>
  </el-form-item>
  
</el-form>

<script type="text">
// in Component:
validateForm: FormGroup

constructor(
  @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
) {
}

submit(): void {
  console.log(this.validateForm.value)
}

reset(): void {
  this.validateForm.reset()
}

ctrl(item: string): AbstractControl {
  return this.validateForm.controls[item]
}

statusCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('status') ? control.errors.status : ''
}

messageCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('message') ? control.errors.message : ''
}

ngOnInit(): void {
  this.validateForm = this.formBuilder.group({
    password: [ '', [this.passwordValidator] ],
    mail: [ '', [this.emailValidator] ],
  })
}

private emailValidator = (control: FormControl): validateResult => {
  const mailReg: RegExp = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/
  if (!mailReg.test(control.value)) {
    return { status: 'error', message: '邮箱格式不正确' }
  }
  return { status: 'success' }
}

private passwordValidator = (control: FormControl): validateResult => {
  if (!control.value) {
    return { status: 'error', message: '密码是必填的' }
  }
  if (control.value.length < 6) {
    return { status: 'error', message: '密码长度必须大于 6 位' }
  }
  return { status: 'success' }
}

</script>
`,
`
<el-form [formGroup]="validateForm" label-width="100px" size="small"
 [show-icon]="true" [show-message]="true" el-class="form-demo">

  <el-form-item label="城市" [required]="true"
    [status]="statusCtrl('city')" [error]="messageCtrl('city')">
    <el-input formControlName="city"></el-input>
  </el-form-item>
  
  <el-form-item label="规格">
    <el-cascader [options]="options" [change-on-select]="true" formControlName="spec"></el-cascader>
  </el-form-item>
  
  <el-form-item label="配送日期" [status]="statusCtrl('date')" [error]="messageCtrl('date')">
    <el-date-picker formControlName="date"></el-date-picker>
  </el-form-item>
  
  <el-form-item label="配送方式">
    <el-radio-group formControlName="express">
      <el-radio label="eleme">蜂鸟配送</el-radio>
      <el-radio label="shop">商家配送</el-radio>
    </el-radio-group>
  </el-form-item>
  
  <el-form-item label="发票">
    <el-checkbox formControlName="invoice">需要发票</el-checkbox>
  </el-form-item>
  
  <el-form-item label="使用折扣">
    <el-checkbox-group formControlName="discount" (modelChange)="discount">
      <el-checkbox label="discount1">折扣1</el-checkbox>
      <el-checkbox label="discount2">折扣2</el-checkbox>
      <el-checkbox label="discount3">折扣3</el-checkbox>
      <el-checkbox label="禁用" [disabled]="true">vip 折扣</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  
  <el-form-item label="配送时间" [status]="statusCtrl('time')" [error]="messageCtrl('time')">
    <el-select placeholder="请选择" formControlName="time" [clearable]="true">
      <el-option label="尽快配送" value="now"></el-option>
      <el-option label="夜间配送" value="night"></el-option>
    </el-select>
  </el-form-item>
  
  
  <el-form-item>
    <el-button type="primary" (click)="submit()">提交</el-button>
  </el-form-item>
  
</el-form>

<script type="text">
// in Component:

labelPosition: string = 'left'
validateForm: FormGroup
options: any[] = [{
  value: 'mike',
  label: '加奶油',
  children: [{
    value: 'hot',
    label: '热奶油',
    children: [{
      value: 'more',
      label: '多糖',
    }, {
      value: 'half',
      label: '半糖',
    }, {
      value: 'few',
      label: '少糖',
    }],
  }],
}, {
  value: 'cafe',
  label: '加咖啡',
  children: [{
    value: 'cubita',
    label: '古巴咖啡',
  }, {
    value: 'brazil',
    label: '巴西咖啡',
  }, {
    value: 'jamaica',
    label: '牙买加咖啡',
  }, {
    value: 'mamba',
    label: '曼巴咖啡',
  }],
}]

constructor(
  @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
) {
}

submit(): void {
  console.log(this.validateForm.value)
}

reset(): void {
  this.validateForm.reset()
}

ctrl(item: string): AbstractControl {
  return this.validateForm.controls[item]
}

statusCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('status') ? control.errors.status : ''
}

messageCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('message') ? control.errors.message : ''
}

ngOnInit(): void {
  this.validateForm = this.formBuilder.group({
    city: [ '', [this.cityValidator] ],
    express: [ '' ],
    invoice: [ '' ],
    discount: [ [] ],
    time: [ '', [this.timeValidator] ],
    num: [ 1 ],
    spec: [ '' ],
    date: [ '', [this.dateValidator] ],
  })
}

private timeValidator = (control: FormControl): validateResult => {
  if (!control.value) {
    return { status: 'error', message: '必须选择配送时间' }
  }
  return { status: 'success' }
}

private dateValidator = (control: FormControl): validateResult => {
  if (!control.value) {
    return { status: 'error', message: '必须选择配送日期' }
  }
  return { status: 'success' }
}

private cityValidator = (control: FormControl): validateResult => {
  if (!control.value) {
    return { status: 'error', message: '必须填写城市名' }
  }
  if (!/[\u4e00-\u9fa5]/.test(control.value)) {
    return { status: 'error', message: '城市名必须是中文' }
  }
  return { status: 'success' }
}

</script>

`,

`
<el-radio-group [(model)]="labelPosition" size="small">
  <el-radio-button label="left">左对齐</el-radio-button>
  <el-radio-button label="right">右对齐</el-radio-button>
  <el-radio-button label="top">顶部对齐</el-radio-button>
</el-radio-group>

<div style="margin: 20px;"></div>
<el-form [formGroup]="validateForm" label-width="100px" size="small"
 el-class="form-demo" [label-position]="labelPosition">

  <el-form-item label="早餐">
    <el-input></el-input>
  </el-form-item>
  
  <el-form-item label="午餐">
    <el-input></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary">提交</el-button>
  </el-form-item>
  
</el-form>

`,

`
<el-form [formGroup]="validateForm" [inline]="true" size="small">

  <el-form-item label="年龄">
    <el-input></el-input>
  </el-form-item>
  
  <el-form-item label="姓名">
    <el-input></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary">搜索</el-button>
  </el-form-item>
  
</el-form>
`,
]

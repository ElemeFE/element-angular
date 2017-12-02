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
  
  <el-form-item label="配送日期" [status]="statusCtrl('password')" [error]="messageCtrl('password')">
    <el-date-picker formControlName="date"></el-date-picker>
  </el-form-item>
  
  f
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
  
  <el-form-item label="配送时间">
    <el-select placeholder="请选择" formControlName="time">
      <el-option label="尽快配送" value="now"></el-option>
      <el-option label="夜间配送" value="night"></el-option>
    </el-select>
  </el-form-item>
  
  
  <el-form-item>
    <el-button type="primary" (click)="submit()">提交</el-button>
  </el-form-item>
  
</el-form>
`,
]

export default [
`
<el-form [formGroup]="validateForm">

  <el-form-item label="城市" [required]="true">
    <el-input formControlName="city"></el-input>
  </el-form-item>
  
  <el-button (click)="submit()">Submit</el-button>
  
<!--<el-input formControlName="city"></el-input>-->
{{ validateForm.controls.city.hasError('required') }}

</el-form>
`
]

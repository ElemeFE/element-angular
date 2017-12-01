export default [
`
<form [formGroup]="validateForm">

<el-input formControlName="city"></el-input>
<!--<el-input formControlName="city"></el-input>-->
{{ validateForm.controls.city.hasError('required') }}

</form>
`
]

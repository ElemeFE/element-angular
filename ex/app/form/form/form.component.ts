import { Component, forwardRef, Inject, OnInit, ViewEncapsulation } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import code from './code'

@Component({
  selector: 'ex-form-demo',
  template: ` `,
})
export class ExFormComponentDemo implements OnInit {
  
  private validateForm: FormGroup
  constructor(
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) {
  }
  
  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      city: ['', Validators.required],
    })
  }
}

@Component({
  selector: 'ex-form',
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExFormComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Switch 开关', link: '/form/switch' },
    next: { name: 'Slider 滑块', link: '/form/slider' },
  }
  private exClass: any = ExFormComponentDemo
  
}

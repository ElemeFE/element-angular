import { Component } from '@angular/core'
import { ElFormProps } from './form.props'

@Component({
  selector: 'el-form',
  template: `
    <form [class]="'el-form ' + (labelPosition ? 'el-form--label-' + labelPosition : '')
      + (inline ? ' el-form--inline' : '')">
     <ng-content></ng-content>
    </form>
  `,
})
export class ElForm extends ElFormProps {
  constructor() {
    super()
  }
}

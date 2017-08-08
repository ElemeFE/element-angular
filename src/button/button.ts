import { Component, Input, ElementRef, Renderer, Inject, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'el-button',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <button [disabled]="disabled"
    [class]="'el-button ' + (type ? 'el-button--' + type : '')">
  </button>
  `,
})
export class ElButton {
  
  @Input() type?: string = 'default'
  @Input() disabled?: boolean = false
  
  constructor(
  ) {
  }
  
}

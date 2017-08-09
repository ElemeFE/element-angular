import { Component, Input, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'el-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <i [class]="iconName ? 'el-icon-' + iconName : ''"></i>
  `,
})
export class ElIcon {
  
  @Input('name') iconName: string
  
  constructor(
  ) {
  }
  
}

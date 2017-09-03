import { Component, Input, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'el-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  `,
})
export class ElBadge {
  
  @Input('name') iconName: string
  
  constructor(
  ) {
  }
  
}

import { Component, Input, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'el-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  `,
})
export class ElAlert {
  
  @Input() model: string | number
  
}

import { Component, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'el-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="el-button-group">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElButtonGroup {
  
  constructor(
  ) {
  }
  
}

import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'el-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'el-button-group ' + nativeClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElButtonGroup {
  
  @Input('class') nativeClass: string = ''
  
  constructor(
  ) {
  }
  
}

import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'el-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="el-breadcrumb">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElBreadcrumb {
  
  @Input() separator: string = '/'
  @Input() prevent: boolean = false
  @Output('next') next: EventEmitter<string> = new EventEmitter<string>()
  
  itemHandle(path: string): void {
    this.next.emit(path)
  }
}

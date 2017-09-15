import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'el-upload-dragger',
  template: `
    <div class="el-upload-dragger"
      [class.is-dragover]="dragger"
      (drop)="dropHandle($event)"
      (dragover)="dragoverHandle($event)"
      (dragleave)="dragLeaveHandle($event)">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElUploadDragger {
  
  @Input() disabled: boolean = false
  @Output() change: EventEmitter<any> = new EventEmitter<any>()

  private dragover: boolean = false
  
  dragoverHandle(event: Event): void {
    event.preventDefault()
    if (this.disabled) return
    this.dragover = true
  }
  
  dragLeaveHandle(event: Event): void {
    event.preventDefault()
    this.dragover = false
  }
  
  dropHandle(event: DragEvent): void {
    event.preventDefault()
    if (this.disabled) return
    this.change.emit({ target: { files: event.dataTransfer.files }})
  }
}


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
  
  @Input() elDisabled: boolean = false
  @Output() change: EventEmitter<any> = new EventEmitter<any>()
  
  dragger: boolean = false
  
  dragoverHandle(event: Event): void {
    event.preventDefault()
    if (this.elDisabled) return
    this.dragger = true
  }
  
  dragLeaveHandle(event: Event): void {
    event.preventDefault()
    this.dragger = false
  }
  
  dropHandle(event: DragEvent): void {
    event.preventDefault()
    if (this.elDisabled) return
    this.change.emit({ target: { files: event.dataTransfer.files }})
  }
}


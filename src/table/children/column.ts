import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef } from '@angular/core'
import { ElTable } from '../table'
import { TableColumn } from '../table.interface'

@Component({
  selector: 'el-table-column',
  template: `
  `,
})
export class ElTableColumn implements OnInit {
  
  @ContentChild('slot') slot: TemplateRef<any>
  @Input('model-key') modelKey: string
  @Input() label: string
  @Input() width: string | number = 'auto'
  // slot content click handle
  @Input('slot-click') slotClick: Function
  
  constructor(
    private root: ElTable,
    private el: ElementRef,
  ) {
  }
  
  ngOnInit(): void {
    if (!this.modelKey && !this.slot) {
      return console.warn('ElTableColumn required modelKey props')
    }
    const self: any = this.el.nativeElement
    const brothers: Element[] = self.parentElement.children
    const index: number = Array.from(brothers).findIndex((el: Element) => el === self)
    const tableColumn: TableColumn = {
      modelKey: this.modelKey,
      label: this.label ? this.label : this.modelKey,
      width: this.width,
      index: index,
      slot: this.slot,
      slotClick: this.slotClick,
    }
    this.root.updateColumns(tableColumn)
    // last element
    index === brothers.length - 1 && this.root.transformColumnsData()
  }
  
}

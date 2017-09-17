import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { ElTable } from '../table'
import { TableColumn } from '../table.interface'

@Component({
  selector: 'el-table-column',
  template: `
  `,
})
export class ElTableColumn implements OnInit {
  
  @Input('model-key') modelKey: string
  @Input() label: string
  @Input() width: number = 180
  
  constructor(
    private root: ElTable,
    private el: ElementRef,
  ) {
  }
  
  ngOnInit(): void {
    if (!this.modelKey) return console.warn('ElTableColumn required modelKey props')
    const self: any = this.el.nativeElement
    const brothers: Element[] = self.parentElement.children
    const index: number = Array.from(brothers).findIndex((el: Element) => el === self)
    const tableColumn: TableColumn = {
      modelKey: this.modelKey,
      label: this.label ? this.label : this.modelKey,
      width: this.width,
      index: index,
    }
    this.root.updateColumns(tableColumn)
    // last element
    index === brothers.length - 1 && this.root.transformColumnsData()
  }
  
}

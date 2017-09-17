import { Component, Input, OnInit } from '@angular/core'
import { ElTable } from '../table'
import { TableColumns } from '../table.interface'

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
  ) {
  }
  
  ngOnInit(): void {
    if (!this.modelKey) return console.warn('ElTableColumn required modelKey props')
    const tableColumn: TableColumns = {
      modelKey: this.modelKey,
      label: this.label ? this.label : this.modelKey,
      width: this.width,
    }
    this.root.updateColumns(tableColumn)
  }
  
}

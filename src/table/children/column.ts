import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef } from '@angular/core'
import { ElTable } from '../table'
import { TableColumn } from '../table.interface'

@Component({
  selector: 'el-table-column',
  template: `
    <ng-content></ng-content>
  `,
})
export class ElTableColumn implements OnInit {
  
  @ContentChild('slot') slot: TemplateRef<any>
  @Input('model-key') modelKey: string
  @Input() label: string
  @Input() width: string | number = 'auto'
  
  private deep: number
  private level: number
  
  constructor(
    private root: ElTable,
    private el: ElementRef,
  ) {
  }
  
  findChild(self: Element): number {
    const children = self.children
    if (!children || !children.length) return 0
    return Array.from(children)
      .map((child: Element) =>
        child.tagName.toUpperCase() === 'EL-TABLE-COLUMN')
      .filter(r => r)
      .length
  }
  
  findLevel(self: Element): number {
    const brothers = self.parentElement.children
    const brothersDeeps: number[] = Array.from(brothers).map((el: Element) => this.findDeep(el))
    const maxDeep: number = brothersDeeps.sort((pre, next) => next - pre)[0]
    return maxDeep
  }
  
  findDeep(self: Element, depth: boolean = false): number {
    const MaxDeep: number = 10
    let deep: number = 0
    Array.from(new Array(MaxDeep)).every(() => {
      const children = self.children
      if (!children || !children.length) return false
      if (children[0].tagName.toUpperCase() !== 'EL-TABLE-COLUMN') {
        return false
      }
      self = children[0]
      deep ++
    })
    return deep
  }
  
  ngOnInit(): void {
    const self: any = this.el.nativeElement
    const brothers: Element[] = self.parentElement.children
    const deep: number = this.findDeep(self)
    const level: number = deep === 0 && brothers.length > 1 ? this.findLevel(self) : deep
    const childCount: number = this.findChild(self)
  
    const index: number = Array.from(brothers).findIndex((el: Element) => el === self)
    const tableColumn: TableColumn = {
      modelKey: this.modelKey,
      label: this.label ? this.label : this.modelKey,
      width: this.width,
      index: index,
      slot: this.slot,
      deep, level, childCount,
    }
    this.root.updateColumns(tableColumn)
    // this.root.updateWidthGroup(String(this.width))
    // last element
    if (deep === 0 && index === brothers.length - 1) {
      this.root.transformColumnsData()
    }
  }
  
}

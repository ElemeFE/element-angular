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
  
  private maxDeep: number = 10
  
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
  
  findDeep(self: Element): number {
    let deep: number = 0
    Array.from(new Array(this.maxDeep)).every(() => {
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
  
  isLastElement(deep: number, self: Element): boolean {
    if (deep !== 0) return false
    let isLast = true
    Array.from(new Array(this.maxDeep)).every(() => {
      const parent: Element = self.parentElement
      if (!parent) return false
      if (self !== parent.children[parent.children.length - 1]) {
        isLast = false
        return false
      }
      if (parent.tagName.toUpperCase() !== 'EL-TABLE-COLUMN') {
        return false
      }
      self = parent
      return true
    })
    return isLast
  }
  
  ngOnInit(): void {
    const self: any = this.el.nativeElement
    const brothers: Element[] = self.parentElement.children
    const deep: number = this.findDeep(self)
    const level: number = deep === 0 && brothers.length > 1 ? this.findLevel(self) : deep
    
    const childCount: number = this.findChild(self)
  
    const tableColumn: TableColumn = {
      modelKey: this.modelKey,
      label: this.label ? this.label : this.modelKey,
      width: this.width,
      slot: this.slot,
      deep, level, childCount,
    }
    this.root.updateColumns(tableColumn)
    if (deep === 0) {
      this.root.updateColumnsWidth({ auto: false, width: +this.width })
    }
    
    // last element
    if (this.isLastElement(deep, self)) {
      this.root.transformColumnsData()
    }
  }
  
}

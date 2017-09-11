import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'el-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul [class]="'el-menu ' + nativeClass"
      [class.el-menu--horizontal]="mode === 'horizontal'"
      [class.el-menu--dark]="theme === 'dark'">
      <ng-content></ng-content>
    </ul>
  `,
})
export class ElMenu {
  
  @Input() mode: string = 'vertical'
  @Input() theme: string = 'light'
  @Input() model: string
  @Input('class') nativeClass: string
  @Input('default-openeds') defaultOpeneds: string[]
  @Input('unique-opened') uniqueOpened: boolean = false
  @Input('menu-trigger') menuTrigger: string = 'hover'
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  openedMenus: string[] = this.defaultOpeneds ? this.defaultOpeneds.slice(0) : []
  
  openMenu(index: string): void {
    const openedMenus = this.openedMenus
    if (openedMenus.indexOf(index) !== -1) return
    this.openedMenus.push(index)
  }
  
  closeMenu(index: string): void {
    this.openedMenus.splice(this.openedMenus.indexOf(index), 1)
  }
  
  selectHandle(index: string, path?: string): void {
    const main: string = path || index
    this.model = main
    this.modelChange.emit(main)
  }
  
}

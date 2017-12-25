import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'el-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul [class]="'el-menu ' + nativeClass"
      [class.el-menu--horizontal]="mode === 'horizontal'"
      [ngStyle]="{ backgroundColor: backgroundColor || '' }">
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
  @Input('background-color') backgroundColor: string
  @Input('text-color') textColor: string
  @Input('active-text-color') activeTextColor: string
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  openedMenus: string[] = this.defaultOpeneds ? this.defaultOpeneds.slice(0) : []
  showBorderIndex: string
  
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
  
  hoverBackgroundColor(): string {
    return this.backgroundColor ? this.hexToRGB() : ''
  }
  
  private hexToRGB(): string {
    const hex: number = + this.backgroundColor.replace('#', '0x')
    const rgb: number[] = [(hex & 0xff0000) >> 16, (hex & 0x00ff00) >> 8, hex & 0x0000ff]
    return `rgb(${rgb.map(v => ~~(0.8 * v)).join(',')})`
  }
  
}

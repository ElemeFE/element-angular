import { AfterViewInit, ChangeDetectionStrategy, Component, Input, } from '@angular/core'

@Component({
  selector: 'el-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="el-menu" [ngClass]="classes()">
      <ng-content></ng-content>
    </ul>
  `,
})
export class ElMenu implements AfterViewInit {
  
  @Input() mode: string = 'vertical'
  @Input() collapse: boolean = false
  @Input() theme: string = 'light'
  @Input('default-active') defaultActive: string
  @Input('default-openeds') defaultOpeneds: string[]
  @Input('unique-opened') uniqueOpened: boolean = false
  @Input('menu-trigger') menuTrigger: string = 'hover'
  
  constructor() {
  }
  
  public openedMenus: string[] = this.defaultOpeneds ? this.defaultOpeneds.slice(0) : []
  
  classes(): any {
    return {
      'el-menu--horizontal': this.mode === 'horizontal',
      'el-menu--dark': this.theme === 'dark',
      'el-menu--collapse': this.collapse,
    }
  }
  
  openMenu(index: string): void {
    let openedMenus = this.openedMenus
    if (openedMenus.indexOf(index) !== -1) return
    this.openedMenus.push(index)
  }
  
  closeMenu(index: string): void {
    this.openedMenus.splice(this.openedMenus.indexOf(index), 1)
  }
  
  toggleActive(index: string = '') :string {
    this.defaultActive = index
    return this.defaultActive
  }
  
  ngAfterViewInit(): void {
  }
  
}

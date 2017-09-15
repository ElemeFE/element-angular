import { Component, Input, OnInit, Optional } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { ElSelect } from './select'

@Component({
  selector: 'el-select-dropdown',
  template: `
    <div [class]="'el-select-dropdown ' + popperClass"
      [style]="dropdownStyles"
      [@state]="isActived">
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('state', [
      state('true', style({
        opacity: 1,
        height: '*',
        display: 'block',
      })),
      state('false', style({
        opacity: 0,
        height: 0,
        display: 'none',
      })),
      transition('* => *', animate(`250ms ease-in-out`)),
    ])
  ],
})
export class ElSelectDropdown implements OnInit {
  
  @Input() isActived: boolean = false
  
  multiple: boolean = false
  popperClass: string
  dropdownStyles: SafeStyle
  
  constructor(
    @Optional() private rootSelect: ElSelect,
    private sanitizer: DomSanitizer
  ) {
    this.dropdownStyles = this.sanitizer.bypassSecurityTrustStyle('display: none; opacity: 0; height: 0')
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      const styles = `min-width: ${this.rootSelect.selfWidth}px;`
      this.dropdownStyles = this.sanitizer.bypassSecurityTrustStyle(styles)
      this.popperClass = this.rootSelect.popperClass
    }, 0)
  }
  
}

import { Component, OnInit, Optional } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { ElSelect } from './select'

@Component({
  selector: 'el-select-dropdown',
  template: `
    <div [class]="'el-select-dropdown ' + popperClass"
      [class.is-multiple]="multiple" [style]="dropdownStyles">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElSelectDropdown implements OnInit {
  
  private multiple: boolean = false
  private popperClass: string
  private dropdownStyles: SafeStyle
  
  constructor(
    @Optional() private rootSelect: ElSelect,
    private sanitizer: DomSanitizer
  ) {
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      const styles = `min-width: ${this.rootSelect.selfWidth}px`
      this.dropdownStyles = this.sanitizer.bypassSecurityTrustStyle(styles)
      this.popperClass = this.rootSelect.popperClass
      this.multiple = this.rootSelect.multiple
    }, 0)
  }
  
  
}

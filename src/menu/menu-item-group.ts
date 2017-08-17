import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'

@Component({
  selector: 'el-menu-item-group',
  template: `
    <li class="el-menu-item-group">
      <div class="el-menu-item-group__title" [style]="paddingStyle()">
        {{title}}
      </div>
      <ul>
        <ng-content></ng-content>
      </ul>
    </li>
  `
})
export class ElMenuItemGroup implements OnInit {
  
  @Input() title: string = ''
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  setPadding() {
  
  }
  
  paddingStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle('padding-left: 20px')
  }

  ngOnInit(): void {
    if (!this.title) {
      console.warn('el-menu-item-group required props: [title: string]')
    }
  }
}
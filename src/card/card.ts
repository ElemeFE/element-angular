import { Component, Input, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="el-card">
      <div class="el-card__header" *ngIf="header || headerStr">
        <ng-container *ngIf="header">
          <ng-template [ngTemplateOutlet]="header">
          </ng-template>
        </ng-container>
        <ng-container *ngIf="!header">
          {{headerStr}}
        </ng-container>
      </div>
      <div class="el-card__body" [style]="makeSafebodyStyle()">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ElCard {
  
  @ContentChild('header') header: TemplateRef<any>
  @Input('header') headerStr: string
  @Input('body-style') bodyStyle: string = ''
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  makeSafebodyStyle(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.bodyStyle)
  }

}

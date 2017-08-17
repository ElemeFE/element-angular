import { Component, Input, ChangeDetectionStrategy} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <li class="el-menu-item" (click)="clickHandle"
      [ngStyle]="paddingStyle()"
      [ngClass]="{ 'is-active': index === parentIndex, 'is-disabled': disabled }">
      <el-tooltip *ngIf="isGroup" [context]="{ effect: 'dark', placement: 'right', content: title }">
        <div style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;box-sizing: border-box;padding: 0 20px;">
          <ng-content></ng-content>
        </div>
      </el-tooltip>
      <ng-container *ngIf="!isGroup">
        <ng-content></ng-content>
      </ng-container>
    </li>
  `,
})
export class ElMenuItem {
  
  @Input() index: string
  @Input() disabled: boolean = false
  @Input() title: string = ''
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  private parentIndex: string
  private isGroup: boolean = false
  
  paddingStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle('padding-left: 20px')
  }
  
  clickHandle(): void {
  
  }
}


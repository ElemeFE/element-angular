import { Component, Input, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'el-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="el-badge">
      <ng-content></ng-content>
      <sup *ngIf="!hidden && (!!makeContent() || isDot)"
        class="el-badge__content"
        [class.is-fixed]="true" [class.is-dot]="isDot">
        {{makeContent()}}
      </sup>
    </div>
  `,
})
export class ElBadge {
  
  @Input() model: string | number
  @Input() max: number                // only model is number
  @Input() hidden: boolean = false
  @Input('is-dot') isDot: boolean = false
  
  makeContent(): string | number {
    if (this.isDot) return ''
    if (typeof this.model === 'number') {
      return this.max < this.model ? `${this.max}+` : this.model;
    }
    return this.model
  }
  
}

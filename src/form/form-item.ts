import { Component, Input, OnChanges, Optional, SimpleChanges } from '@angular/core'
import { ElForm } from './form'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'

@Component({
  selector: 'el-form-item',
  template: `
  <div [class]="'el-form-item ' + makeSize()"
    [class.el-form-item--feedback]="root.showIcon"
    [class.is-error]="status === 'error'"
    [class.is-success]="status === 'success'"
    [class.is-validating]="status === 'validating'"
    [class.is-required]="required">
    <label class="el-form-item__label" [style]="makeLabelStyle()" *ngIf="label">
      {{label}}
    </label>
    <div class="el-form-item__content" [style]="makeContentStyle()">
      <ng-content></ng-content>
      <div *ngIf="showMessageEl" class="el-form-item__error"
        [class.el-form-item__error--inline]="isInlineMessage()">
          {{error}}
        </div>
    </div>
  </div>
  `,
})
export class ElFormItem implements OnChanges {
  // error / success / validating
  @Input() status: string
  @Input() error: string
  @Input() label: string
  @Input() size: string
  @Input() required: boolean = false
  @Input('label-width') labelWidth: string
  @Input('show-message') showMessage: boolean = true
  @Input('inline-message') inlineMessage: boolean
  
  statusSubscriber: Array<(status: string) => void> = []
  
  constructor(
    @Optional() public root: ElForm,
    private sanitizer: DomSanitizer,
  ) {
  }
  
  showMessageEl(): boolean {
    if (this.status !== 'error') return false
    return this.error && this.showMessage && this.root.showMessage
  }
  
  isInlineMessage(): boolean {
    const notDefault: boolean = typeof this.inlineMessage === 'boolean'
    return notDefault ? this.inlineMessage : this.root.inlineMessage
  }
  
  makeSize(): string {
    const appointed = this.size || this.root.size || ''
    return appointed ? ` el-form-item--${appointed} ` : ''
  }
  
  makeLabelStyle(): SafeStyle {
    const width: string = this.labelWidth || this.root.labelWidth || null
    const styles: string = width && this.root.labelPosition !== 'top' ? `width: ${width};` : ''
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  makeContentStyle(): SafeStyle {
    const skipStyle: boolean = (this.root.labelPosition === 'top' || this.root.inline)
      || (!this.label && !this.root.labelWidth)
    if (skipStyle) return this.sanitizer.bypassSecurityTrustStyle('')
    const width: string = this.labelWidth || this.root.labelWidth
    const styles: string = `margin-left: ${width};`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.root.showIcon) return
    if (!changes || !changes.status) return
    this.statusSubscriber.forEach(sub => {
      sub(changes.status.currentValue)
    })
  }

}

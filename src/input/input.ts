import {
  AfterViewInit, Component, ContentChild, OnInit, TemplateRef,
  ViewChild,
} from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { ElInputPoprs } from './input-props'
import { getTextareaHeight } from './help'

@Component({
  selector: 'el-input',
  styles: ['.icon-disabled {cursor: not-allowed;} .icon-disabled:before {cursor: not-allowed;}'],
  template: `
    <div [class]="(type === 'text' ? 'el-input' : 'el-textarea') +
    (size ? ' el-input--' + size : '') + ' ' + parentClass"
      [class.is-disabled]="disabled"
      [class.el-input-group]="prepend || append"
      [class.el-input-group--append]="append"
      [class.el-input-group--prepend]="prepend">
      <ng-container *ngIf="type === 'text'">
        
        <div class="el-input-group__prepend" *ngIf="prepend">
          <ng-template [ngTemplateOutlet]="prepend">
          </ng-template>
        </div>
        
        <span class="el-input__suffix" *ngIf="icon">
          <span class="el-input__suffix-inner">
            <i [class]="'el-input__icon ' + ('el-icon-' + icon) + (iconClick ? ' is-clickable ' : ' ')
              + (iconClass ? iconClass : '')"
               [attr.disabled]="disabled"
               [class.icon-disabled]="disabled"
               *ngIf="icon" (click)="iconClick.emit($event)"
               (mouseenter)="iconMouseEnter.emit($event)" (mouseleave)="iconMouseLeave.emit($event)"></i>
          </span>
        </span>
        <input class="el-input__inner"
          [autocomplete]="autoComplete" [value]="value" [name]="name"
          [placeholder]="placeholder" [autofocus]="autofocus"
          [disabled]="disabled" [readonly]="readonly"
          [maxlength]="maxlength" [minlength]="minlength"
          [ngModel]="model" (ngModelChange)="handleInput($event)"
          (focus)="focus.emit($event)" (blur)="blur.emit($event)">
        <i *ngIf="validating" class="el-input__icon el-icon-loading"></i>
        
        <div class="el-input-group__append" *ngIf="append">
          <ng-template [ngTemplateOutlet]="append">
          </ng-template>
        </div>
      </ng-container>
      
      <ng-container *ngIf="type === 'textarea'">
        <textarea class="el-textarea__inner" #textarea
          [style]="textareaStyles"
          [value]="value" [name]="name"
          [placeholder]="placeholder" [autofocus]="autofocus"
          [disabled]="disabled" [readonly]="readonly"
          [maxlength]="maxlength" [minlength]="minlength"
          [ngModel]="model" (input)="handleInput($event.target.value)"
          (focus)="focus.emit($event)" (blur)="blur.emit($event)"></textarea>
      </ng-container>
    </div>
  `,
})
export class ElInput extends ElInputPoprs implements OnInit, AfterViewInit {
  
  @ContentChild('prepend') prepend: TemplateRef<any>
  @ContentChild('append') append: TemplateRef<any>
  @ViewChild('textarea') textarea: any
  
  textareaStyles: SafeStyle
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
    super()
  }
  
  makeTextareaStyles(): void {
    if (!this.autosize || this.type !== 'textarea') return
    const height: string = getTextareaHeight(this.textarea.nativeElement, this.autosize.minRows, this.autosize.maxRows)
    const styles: string = `resize: ${this.resize}; height: ${height};`
    this.textareaStyles = this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  handleInput(val: string): void {
    this.model = val
    this.modelChange.emit(val)
    const timer: any = setTimeout(() => {
      this.makeTextareaStyles()
      clearTimeout(timer)
    }, 0)
  }
  
  ngOnInit(): void {
    if (this.value && !this.model) {
      this.model = this.value
    }
  }
  
  ngAfterViewInit(): any {
    // no content required
    if (this.type === 'textarea') {
      return setTimeout(() => {
        this.makeTextareaStyles()
      }, 0)
    }
  }
}

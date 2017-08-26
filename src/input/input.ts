import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { ElInputPoprs } from './input-props'
import { getTextareaHeight } from './help'

@Component({
  selector: 'el-input',
  template: `
    <div [class]="(type === 'text' ? 'el-input' : 'el-textarea') +
    (size ? ' el-input--' + size : '') + ' ' + class"
      [class.is-disabled]="disabled"
      [class.el-input-group]="includePrepend || includeAppend"
      [class.el-input-group--append]="includeAppend"
      [class.el-input-group--prepend]="includePrepend">
      <ng-container *ngIf="type === 'text'">
        
        <div class="el-input-group__prepend" *ngIf="includePrepend" #prepend>
          <ng-content select="[slot=prepend]"></ng-content>
        </div>
        
        <i [class]="'el-input__icon ' + ('el-icon-' + icon) + (iconClick ? ' is-clickable' : '')"
          *ngIf="icon" (click)="iconClick.emit($event)"></i>
        <input class="el-input__inner"
          [autocomplete]="autoComplete" [value]="value" [name]="name"
          [placeholder]="placeholder" [autofocus]="autofocus"
          [disabled]="disabled" [readonly]="readonly"
          [maxlength]="maxlength" [minlength]="minlength"
          [ngModel]="model" (ngModelChange)="handleInput($event)"
          (focus)="focus.emit($event)" (blur)="blur.emit($event)">
        <i *ngIf="validating" class="el-input__icon el-icon-loading"></i>
        
        <div class="el-input-group__append" *ngIf="includeAppend" #append>
          <ng-content select="[slot=append]"></ng-content>
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
  
  @ViewChild('prepend') prepend: any
  @ViewChild('append') append: any
  @ViewChild('textarea') textarea: any
  
  private includePrepend: boolean = true
  private includeAppend: boolean = true
  private textareaStyles: SafeStyle
  private nativeClass: string = ' '
  
  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
    super()
    console.log(this.el.nativeElement.classList, 456)
    this.nativeClass += this.el.nativeElement.classList.value
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
    this.model = this.value
  }
  
  ngAfterViewInit(): any {
    // no content required
    if (this.type === 'textarea') {
      return setTimeout(() => {
        this.makeTextareaStyles()
        this.includePrepend = this.includeAppend = false
      }, 0)
    }
    // hide empty elements
    const prependText = this.prepend && this.prepend.nativeElement.innerText
    const appendText = this.append && this.append.nativeElement.innerText
    setTimeout(() => {
      this.includePrepend = prependText || prependText.length > 1
      this.includeAppend = appendText || appendText.length > 1
    }, 0)
  }
}

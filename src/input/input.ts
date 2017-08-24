import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { ElInputPoprs } from './input-props'

@Component({
  selector: 'el-input',
  template: `
    <div [class]="type === 'text' ? 'el-input' : 'el-textarea' + size ? 'el-input--' + size : ''"
      [class.is-disabled]="disabled"
      [class.el-input-group]="includePrepend"
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
          [ngModel]="model" (input)="handleInput($event.target.value)"
          (focus)="focus.emit($event)" (blur)="blur.emit($event)">
        <i *ngIf="validating" class="el-input__icon el-icon-loading"></i>
        
        <div class="el-input-group__append" *ngIf="includeAppend" #append>
          <ng-content select="[slot=append]"></ng-content>
        </div>
      </ng-container>
      
      <ng-container *ngIf="type === 'textarea'">
        <textarea class="el-textarea__inner"
          [value]="currentValue"
          [style]="''"
          (input)="handleInput"
          (focus)="focus.emit($event)" (blur)="blur.emit($event)"></textarea>
      </ng-container>
    </div>
  `,
})
export class ElInput extends ElInputPoprs implements OnInit, AfterViewInit {
  
  @ViewChild('prepend') prepend: any
  @ViewChild('append') append: any
  
  private includePrepend: boolean = true
  private includeAppend: boolean = true
  private validating: boolean = false // parent === validating
  private currentValue: string | number
  
  constructor(
  ) {
    super()
  }
  
  handleInput(val: string): void {
    this.modelChange.emit(val)
  }
  
  ngOnInit(): void {
    this.model = this.value
  }
  
  ngAfterViewInit(): void {
    const prependText = this.prepend && this.prepend.nativeElement.innerText
    const appendText = this.append && this.append.nativeElement.innerText
    setTimeout(() => {
      this.includePrepend = prependText || prependText.length > 1
      this.includeAppend = appendText || appendText.length > 1
    }, 0)
  }
}

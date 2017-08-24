import { Component, OnInit } from '@angular/core'
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
        
        <div class="el-input-group__prepend" *ngIf="includePrepend">
          <!--<slot name="prepend"></slot>-->
        </div>
        
        <i [class]="'el-input__icon ' + ('el-icon-' + icon) + (iconClick ? ' is-clickable' : '')"
          *ngIf="icon" (click)="handleIconClick"></i>
        <input class="el-input__inner"
          [autocomplete]="autoComplete" [value]="currentValue"
          (input)="handleInput" (focus)="handleFocus" (blur)="handleBlur">
        <i *ngIf="validating" class="el-input__icon el-icon-loading"></i>
        
        <div class="el-input-group__append" *ngIf="includeAppend">
          <!--<slot name="append"></slot>-->
        </div>
      </ng-container>
      
      <ng-container *ngIf="type === 'textarea'">
        <textarea class="el-textarea__inner"
          [value]="currentValue"
          [style]="''"
          (input)="handleInput" (focus)="handleFocus" (blur)="handleBlur"></textarea>
      </ng-container>
    </div>
  `,
})
export class ElInput extends ElInputPoprs implements OnInit {
  
  private includePrepend: boolean = false
  private includeAppend: boolean = false
  private validating: boolean = false // parent === validating
  private currentValue: string | number
  
  constructor(
  ) {
    super()
  }
  
  handleIconClick(): void {
  
  }
  
  handleFocus(): void {
  
  }
  
  handleBlur(): void {
  
  }
  
  handleInput(): void {
  
  }
  
  ngOnInit(): void {
    this.currentValue = this.value
  }
  
}

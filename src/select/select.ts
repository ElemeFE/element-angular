import { Component, Input, OnInit, ElementRef } from '@angular/core'
import { ElSelectPoprs } from './select-props'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-select',
  template: `
    <div class="el-select" (click)="closeHandle">
      <div class="el-select__tags" *ngIf="multiple" (click)="toggleMenu" [style]="selectTagWidth">
        <div @after-leave="resetInputHeight">
          <div *ngFor="let item of selected" type="primary"
            [closable]="!disabled" [hit]="item.hitState"
            (close)="deleteTag($event, item)">
            <span class="el-select__tags-text">{{item.currentLabel}}</span>
          </div>
        </div>

        <input [class]="'el-select__input' + (' is-' + size)"
          *ngIf="filterable"
          (focus)="visible = true"
          [disabled]="disabled" [model]="query"
          [debounce]="remote ? 300 : 0"
          [style]="width: inputLength + 'px', 'max-width': inputWidth - 42 + 'px'">
      </div>
      <el-input [model]="selectedLabel" type="text"
        [placeholder]="placeholder"
        [name]="name" [size]="size" [disabled]="disabled" [readonly]="!filterable || multiple"
        :validate-event="false"
        (focus)="handleFocus"
        [icon]="iconClass">
      </el-input>
      <ng-container *ngIf="visible && emptyText !== false">
        <el-select-menu>
          <el-scrollbar tag="ul" *ngIf="options.length > 0 && !loading"
            wrap-class="el-select-dropdown__wrap"
            view-class="el-select-dropdown__list"
            [class.is-empty]="!allowCreate && filteredOptionsCount === 0">
            <el-option [value]="query" *ngIf="showNewOption">
            </el-option>
            <ng-content></ng-content>
          </el-scrollbar>
          <p class="el-select-dropdown__empty" *ngIf="emptyText && (allowCreate && options.length === 0 || !allowCreate)">{{ emptyText }}</p>
        </el-select-menu>
      </ng-container>
    </div>
  `,
})
export class ElSelect extends ElSelectPoprs implements OnInit {
  
  private selectTagWidth: SafeStyle
  private selectInputStyles: SafeStyle
  private inputLength: number = 20
  private selected: any[]
  private query: any
  private selectedLabel: string
  
  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
    super()
  }
  
  closeHandle(): void {
  
  }
  
  visible(): void {
  
  }
  
  ngOnInit(): void {
    const input = this.el.nativeElement.querySelector('.el-select__input')
    const inputWidth = input.getBoundingClientRect().width
    const styles: string = `max-width: ${inputWidth - 32}px;`
    this.selectInputStyles = this.sanitizer.bypassSecurityTrustStyle('')
    this.selectTagWidth = this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
}

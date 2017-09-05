import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core'
import { ElDataPicker } from './picker'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'el-data-picker-panel',
  animations: [dropAnimation],
  template: `
    <div [@dropAnimation]="show"
      [ngStyle]="{width: width + 'px'}"
      [class]="'el-picker-panel ' + 'el-date-picker ' + popperClass"
      [class.has-sidebar]="root.sidebar || shortcuts"
      [class.has-time]="showTime">
      <div class="el-picker-panel__body-wrapper">
        <!--<div class="el-picker-panel__sidebar" *ngIf="shortcuts">-->
          <!--<button type="button" class="el-picker-panel__shortcut"-->
            <!--*ngFor="shortcut in shortcuts"-->
            <!--(click)="handleShortcutClick(shortcut)">-->
            <!--{{ shortcut.text }}-->
          <!--</button>-->
        <!--</div>-->
        <div class="el-picker-panel__body">
          <div class="el-date-picker__header">
            <button class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left"
              type="button" (click)="prevYear">
            </button>
            <button class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left"
              type="button" (click)="prevMonth"
              *ngIf="currentView === 'date'">
            </button>
            <span class="el-date-picker__header-label" (click)="showPicker('year')">{{dateShowModels.year}} 年</span>
            <span class="el-date-picker__header-label"
              [class.active]="currentView === 'month'"
              (click)="showPicker('month')"
              *ngIf="currentView === 'date'">{{dateShowModels.month}} 月</span>
            <button class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right"
              type="button" (click)="nextYear">
            </button>
            <button class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right"
              type="button" (click)="nextMonth"
              *ngIf="currentView === 'date'">
            </button>
          </div>

          <div class="el-picker-panel__content">
            <el-date-table *ngIf="currentView === 'date'"
              (modelChange)="datePickChangeHandle($event)"
              [model]="model">
            </el-date-table>
            <el-year-table *ngIf="currentView === 'year'"
              [model]="model"
              (modelChange)="handleYearPick()"
              [disabled-date]="disabledDate">
            </el-year-table>
            <el-month-table *ngIf="currentView === 'month'"
              [model]="model"
              (modelChange)="monthPickChangeHandle($event)"
              [disabled-date]="disabledDate">
            </el-month-table>
          </div>
        </div>
      </div>

      <div class="el-picker-panel__footer" *ngIf="footerVisible && currentView === 'date'">
        <a href="JavaScript:" class="el-picker-panel__link-btn" (click)="changeToNow()">556</a>
        <button class="el-picker-panel__btn" type="button"
          (click)="confirm()">667</button>
      </div>
    </div>
  `
})
export class ElDatePickerPanel implements OnInit {
  
  @Input() show: boolean = false
  @Input() width: number = 254
  @Input() model: number
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>()
  
  private currentView: string = 'date'
  private dateShowModels: any = {}
  
  constructor(
    @Optional() private root: ElDataPicker,
  ) {
  }
  
  showPicker(pickPath: string): void {
    this.currentView = pickPath
  }
  
  updateDate(): void {
    const date = new Date(this.model)
    this.dateShowModels = {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    }
  }
  
  datePickChangeHandle(time: number): void {
    this.model = time
    this.modelChange.emit(time)
    this.updateDate()
  }
  
  monthPickChangeHandle(time: number): void {
    this.model = time
    this.currentView = 'date'
    this.updateDate()
  }
  
  ngOnInit(): void {
    if (!this.model) {
      this.model = new Date().getTime()
    }
    this.updateDate()
  }
}

import { Component, Input, Optional } from '@angular/core'
import { ElDataPicker } from './picker'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'el-data-picker-panel',
  animations: [dropAnimation],
  template: `
    <div [@dropAnimation]="show"
      [ngStyle]="{width: width + 'px', height: height + 'px'}"
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
            <span class="el-date-picker__header-label" (click)="showYearPicker">{{ yearLabel }}</span>
            <span class="el-date-picker__header-label" (click)="showMonthPicker"
              [class.active]="currentView === 'month'"
              *ngIf="currentView === 'date'">990</span>
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
              (modelChange)="handleDatePick($event)"
              [time]="today">
            </el-date-table>
            <el-year-table *ngIf="currentView === 'year'"
              [time]="today"
              (modelChange)="handleYearPick()"
              [disabled-date]="disabledDate">
            </el-year-table>
            <el-month-table *ngIf="currentView === 'month'"
              [time]="today"
              (modelChange)="handleMonthPick()"
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
export class ElDatePickerPanel {
  
  @Input() show: boolean = false
  @Input() width: number = 254
  @Input() height: number = 286
  
  private currentView: string = 'date'
  private today: number = new Date().getTime()
  
  constructor(
    @Optional() private root: ElDataPicker,
  ) {
  
  }
}

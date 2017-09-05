import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElInputsModule } from '../input/module'
import { ElDataPicker } from './picker'
import { ElDatePickerPanel } from './picker-panel'
import { ElDateTable } from './children/date-table'
import { ElYearTable } from './children/year-table'
import { EMonthTable } from './children/month-table'

@NgModule({
  declarations: [ElDataPicker, ElDatePickerPanel, ElDateTable, ElYearTable, EMonthTable],
  exports: [ElDataPicker, ElDatePickerPanel, ElDateTable, ElYearTable, EMonthTable],
  imports: [CommonModule, FormsModule,ElInputsModule],
  entryComponents: [ElDataPicker],
})
export class ElDateModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElDateModule, providers: [] }
  }
}

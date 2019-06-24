
export interface ElColorPickerLocales {
  confirm: string;
  clear: string;
}

export interface ElDatePickerLocales {
  now: string;
  today: string;
  cancel: string;
  clear: string;
  confirm: string;
  selectDate: string;
  selectTime: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  prevYear: string;
  nextYear: string;
  prevMonth: string;
  nextMonth: string;
  year: string;
  month1: string;
  month2: string;
  month3: string;
  month4: string;
  month5: string;
  month6: string;
  month7: string;
  month8: string;
  month9: string;
  month10: string;
  month11: string;
  month12: string;
  month?: string;
  week?: string;
  weeks: {
    sun: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
  };
  months: {
    jan: string;
    feb: string;
    mar: string;
    apr: string;
    may: string;
    jun: string;
    jul: string;
    aug: string;
    sep: string;
    oct: string;
    nov: string;
    dec: string;
  };
}

export interface ElSelectLocales {
  loading: string;
  noMatch: string;
  noData: string;
  placeholder: string;
}

export interface ElCascaderLocales {
  noMatch: string;
  loading: string;
  placeholder: string;
  noData: string;
}

export interface ElPaginationLocales {
  goto: string;
  pagesize: string;
  total: string;
  pageClassifier: string;
}

export interface ElMessageBoxLocales {
  title: string;
  confirm: string;
  cancel: string;
  error: string;
}

export interface ElUploadLocales {
  deleteTip: string;
  delete: string;
  preview: string;
  continue: string;
}

export interface ElTableLocales {
  emptyText: string;
  confirmFilter: string;
  resetFilter: string;
  clearFilter: string;
  sumText: string;
}

export interface ElTreeLocales {
  emptyText: string;
}
export interface ElTransferLocales {
  noMatch: string;
  noData: string;
  titles: string[];
  filterPlaceholder: string;
  noCheckedFormat: string;
  hasCheckedFormat: string;
}
export interface ElImageLocales {
  error: string;
}
export interface ElPageHeaderLocales {
  title: string;
}

export interface ElLocales {
  el: {
    colorpicker: ElColorPickerLocales;
    datepicker: ElDatePickerLocales;
    select: ElSelectLocales;
    cascader: ElCascaderLocales;
    pagination: ElPaginationLocales;
    messagebox: ElMessageBoxLocales;
    upload: ElUploadLocales;
    table: ElTableLocales;
    tree: ElTreeLocales;
    transfer: ElTransferLocales;
    image: ElImageLocales;
    pageHeader: ElPageHeaderLocales;
  }
}

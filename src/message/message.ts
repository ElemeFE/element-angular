import {
  Component, Input, Output, EventEmitter, OnInit,
  ElementRef,
} from '@angular/core'

@Component({
  selector: 'el-message',
  template: `
    <div id="id2"></div>
  `,
})
export class ElMessageContainer implements OnInit {
  
  
  constructor(
    private el: ElementRef,
  ) {
  }
  
  
  ngOnInit(): void {
  }
  
}

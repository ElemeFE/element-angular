import { Directive, Input, OnChanges, OnInit, Self } from '@angular/core'
import { NgClass } from '@angular/common'

@Directive({
  selector: '[el-container]',
  providers: [NgClass],
})
export class ElContainerDirective implements OnChanges, OnInit {
  
  @Input() direction: string = ''
  private hostClasses: { [key: string]: boolean }
  
  constructor(
    @Self() private ngClass: NgClass,
  ) {
  }
  
  ngOnChanges(): void {
    this.colletClasses()
  }
  
  ngOnInit(): void {
    this.colletClasses()
  }
  
  private colletClasses(): void {
    this.hostClasses = {
      'el-container': true,
      'is-vertical': this.direction === 'vertical',
    }
  
    this.ngClass.ngClass = this.hostClasses
    this.ngClass.ngDoCheck()
  }
  
}

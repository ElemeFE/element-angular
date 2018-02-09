import { Directive, Input, OnChanges, OnInit, Self } from '@angular/core'
import { NgStyle } from '@angular/common'

@Directive({
  selector: '[el-aside]',
  host: { class: 'el-aside' },
  providers: [NgStyle],
})
export class ElAsideDirective implements OnChanges, OnInit {
  
  @Input() width: string = '300px'
  private hostStyles: { [key: string]: string }
  
  constructor(
    @Self() private ngStyle: NgStyle,
  ) {
  }
  
  ngOnChanges(): void {
    this.colletClasses()
  }
  
  ngOnInit(): void {
    this.colletClasses()
  }
  
  private colletClasses(): void {
    this.hostStyles = {
      width: this.width,
    }
  
    this.ngStyle.ngStyle = this.hostStyles
    this.ngStyle.ngDoCheck()
  }
  
}

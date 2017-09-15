import { Component, Input, ChangeDetectionStrategy, OnInit, EventEmitter, Output } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="'el-tag' + (type ? ' el-tag--' + type : '')"
      [class.is-hit]="hit">
      <ng-content></ng-content>
      <i class="el-tag__close el-icon-close" *ngIf="closable" (click)="closeEmitter.emit()"></i>
    </span>
  `,
})
export class ElTag implements OnInit {
  
  @Input() type: string         // enum: primary/gray/success/warning/danger
  @Input() closable: boolean = false
  @Input() hit: boolean = false
  @Input() color: string
  @Input('close-transition') closeTransition: boolean = false
  @Output('close') closeEmitter: EventEmitter<any> = new EventEmitter<any>()
  
  tagStyles: SafeStyle
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  ngOnInit(): void {
    const styles: string = `backgroundColor: ${this.color}`
    this.tagStyles = this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
}

import {
  Input, Directive, OnInit, ElementRef, Renderer2,
  OnChanges, SimpleChanges,
} from '@angular/core'
import { DocumentWrapper, WindowWrapper } from '../shared/services'

@Directive({
  selector: '[el-loading]',
})
export class ElLoadingDirective implements OnInit, OnChanges {
  
  @Input() text: string
  @Input() lock: boolean = false        // ban scroll on loading active
  @Input('custom-class') customClass: string
  @Input('full-screen') fullScreen: boolean = false
  @Input('el-loading') showLoading: boolean = false
  
  cacheElement: HTMLElement
  cacheOverflow: string
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private document: DocumentWrapper,
    private window: WindowWrapper,
  ) {
  }
  
  toggleLock(status: boolean = false): void {
    if (!this.lock) return
    const nextValue = status ? 'hidden' : this.cacheOverflow
    this.renderer.setStyle(this.document.body, 'overflow', nextValue)
  }
  
  makeHtml(): string {
    this.lock && this.toggleLock(this.showLoading)
    return `
      <div class="el-loading-mask ${this.customClass} ${this.fullScreen ? ' is-fullscreen' : ''}"
        style="display: ${this.showLoading ? 'block': 'none'}">
        <div class="el-loading-spinner">
          <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none"/>
          </svg>
          <p class="el-loading-text" style="display: ${this.text ? 'block': 'none'}">
            ${this.text}
          </p>
        </div>
      </div>
    `
  }
  
  ngOnInit(): void {
    // save old overflow
    if (this.lock) {
      this.cacheOverflow = this.window.getComputedStyle(this.document.body).overflow
    }
    
    this.cacheElement = this.renderer.createElement('div')
    this.cacheElement.innerHTML = this.makeHtml()
    const parentElement = this.fullScreen ? this.document.body : this.el.nativeElement
    if (!this.fullScreen) {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'relative')
    }
    this.renderer.appendChild(parentElement, this.cacheElement)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.showLoading && this.cacheElement) {
      this.cacheElement.innerHTML = this.makeHtml()
    }
  }
  
}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app.routing'
import { ExComponentModule } from './components/module'

import { ElModule } from '../../src/element-angular.module'
import { ExAppComponent } from './app.component'
import { ExSharedModule } from './shared/module'
import { DocsService } from './shared/services/docs/docs.service'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    ExAppComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RouterModule,
    HttpModule,
    ElModule.forRoot(),
    ExSharedModule.forRoot(),
    AppRoutingModule,
    ExComponentModule,
  ],
  providers: [
    DocsService,
    { provide: 'WindowLocation', useValue: location },
  ],
  bootstrap: [ExAppComponent],
})
export class AppModule {
}


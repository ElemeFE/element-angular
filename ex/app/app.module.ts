import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app.routing'
import { ExComponentModule } from './components/module'

import { ElModule } from '../../src/index'
// import { ElModule } from '../../release/index'

import { ExAppComponent } from './app.component'
import { ExSharedModule } from './shared/module'
import { DocsService } from './shared/services/docs/docs.service'

@NgModule({
  declarations: [
    ExAppComponent,
  ],
  imports: [
    BrowserModule,
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

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app.routing'
import { ExComponentModule } from './components/module'

import { ElModule } from '../../src/index'
import { ExAppComponent } from './app.component'

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
    AppRoutingModule,
    ExComponentModule,
  ],
  providers: [DocsService],
  bootstrap: [ExAppComponent],
})
export class AppModule {
}

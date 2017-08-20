import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app.routing'
import { ExComponentModule } from './components/module'

import { ElModule } from '../../src/index'
import { AppComponent } from './app.component'

import { DocsService } from './shared/services/docs/docs.service'

@NgModule({
  declarations: [
    AppComponent,
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
  bootstrap: [AppComponent],
})
export class AppModule {
}

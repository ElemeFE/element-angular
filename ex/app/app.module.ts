import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app.routing'
import { ExComponentModule } from './components/module'

import { ElModule } from '../../src/index'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ElModule.forRoot(),
    AppRoutingModule,
    ExComponentModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

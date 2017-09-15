import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'
declare let __DEBUG__: any

;!__DEBUG__ && enableProdMode()

platformBrowserDynamic().bootstrapModule(AppModule)

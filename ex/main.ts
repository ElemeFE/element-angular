declare let __DEBUG__: any
declare let require: any

import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'
import TRANSLATION from './messages.xmb'

console.log(TRANSLATION)
if (!__DEBUG__) {
  enableProdMode()
}

// platformBrowserDynamic().bootstrapModule(AppModule)
platformBrowserDynamic()
  .bootstrapModule(
    AppModule,
    {
      providers: [
        { provide: TRANSLATIONS, useValue: TRANSLATION },
        { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
        { provide: LOCALE_ID, useValue: 'fr' },
      ],
    })



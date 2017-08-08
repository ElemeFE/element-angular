import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

export const appRoutes: Routes = [
  // {path: '', component: HomeComponent},
  {
    path: 'basic',
    loadChildren: './basic/basic.module#BasicModule',
    data: { preload: true },
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: false,
        preloadingStrategy: PreloadAllModules,
      },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
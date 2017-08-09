import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

export const appRoutes: Routes = [
  {
    path: 'basic',
    loadChildren: './basic/basic.module#BasicModule',
    data: { preload: true },
  },
  {
    path: 'form',
    loadChildren: './form/form.module#FormModule',
    data: { preload: true },
  },
  {path: '', redirectTo: '/basic', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
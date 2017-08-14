import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

export const appRoutes: Routes = [
  {
    path: 'basic',
    loadChildren: './basic/basic.module#BasicModule',
  },
  {
    path: 'form',
    loadChildren: './form/form.module#FormModule',
  },
  {
    path: 'others',
    loadChildren: './others/others.module#OthersModule',
  },
  {
    path: 'nav',
    loadChildren: './navigation/navigation.module#NavigationModule',
  },
  {path: '', redirectTo: '/basic', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
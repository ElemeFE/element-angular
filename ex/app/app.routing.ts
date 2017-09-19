import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

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
  {
    path: 'guide',
    loadChildren: './components/guide/guide.module#GuideModule',
  },
  {
    path: 'data',
    loadChildren: './data/data.module#DataModule',
  },
  {
    path: 'notice',
    loadChildren: './notice/notice.module#NoticeModule',
  },
  { path: '', redirectTo: '/guide/install', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

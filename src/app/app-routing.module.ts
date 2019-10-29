import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainpageComponent} from './core/mainpage/mainpage.component';
import {BodyComponent} from './categories/body/body.component';
import {AuthcheckGuard} from './shared/guards/authcheck.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '',
    pathMatch: 'full', component: MainpageComponent,
  },
  {
    path: 'home',
    pathMatch: 'full', component: MainpageComponent,
  },
  {
    canActivate: [AuthcheckGuard],
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(mod => mod.CategoriesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

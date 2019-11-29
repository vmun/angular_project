import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainpageComponent} from './core/mainpage/mainpage.component';
// import {BodyComponent} from './categories/body/body.component';
import {AuthcheckGuard} from './shared/guards/authcheck.guard';
// import {CategoriesModule} from './categories/categories.module';
import {NotFoundComponent} from './core/not-found/not-found.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
    data: {animation: 'Auth'}
  },
  {
    path: '',
    pathMatch: 'full', component: MainpageComponent,
    data: {animation: 'Main'}
  },
  {
    path: 'home',
    pathMatch: 'full', component: MainpageComponent,
    data: {animation: 'Main'}
  },
  {
    canActivate: [AuthcheckGuard],
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(mod => mod.CategoriesModule),
    // component: BodyComponent,
    data: {animation: 'Categories'}
  },
  {
    canActivate: [AuthcheckGuard],
    path: 'categories/:id/draw',
    loadChildren: () => import('./draw/draw.module').then(mod => mod.DrawModule),
  },
  {
    path: '**',
    component: NotFoundComponent
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

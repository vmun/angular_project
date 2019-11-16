import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainpageComponent} from './core/mainpage/mainpage.component';
import {CategoriesModule} from './categories/categories.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
<<<<<<< HEAD
import {ChartsModule} from 'ng2-charts';
=======
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

>>>>>>> 03c5aabdc6c6244dbf144dc6c02bde36b4a84b6c

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

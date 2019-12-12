import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainpageComponent} from './core/mainpage/mainpage.component';
// import {CategoriesModule} from './categories/categories.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {ChartsModule} from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
<<<<<<< Updated upstream
import {TestInterceptor} from './shared/test-interceptor';
import {DataPassService} from "./shared/datapass.service";
=======
import {TestInterceptor} from './shared/interceptors/test-interceptor';
import {DataPassService} from './shared/services/datapass.service';
import {MatProgressBarModule} from '@angular/material';
>>>>>>> Stashed changes


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
<<<<<<< Updated upstream
    ChartsModule
=======
    ChartsModule,
    MatProgressBarModule,
>>>>>>> Stashed changes
  ],
  providers: [
    DataPassService, {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

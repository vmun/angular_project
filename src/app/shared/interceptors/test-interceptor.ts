import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpClient, HttpResponse
} from '@angular/common/http';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DataPassService} from '../services/datapass.service';


@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor(private router: Router, private datapassService: DataPassService, private http: HttpClient) {
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler):
  //   Observable<HttpEvent<any>> {
  //   return next.handle(req).pipe(tap(() => {
  //     },
  //     (err: any) => {
  //       if (err instanceof HttpErrorResponse) {
  //         if (err.status !== 400) {
  //           return;
  //         }
  //         this.router.navigate(['./auth/register']);
  //       }
  //     }));
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({headers: req.headers.set('Authorization', `JWT ${token}`)});
    }
    return next.handle(req).pipe(tap(() => {
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['./auth/login']);
          localStorage.clear();
        }
      }));
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   let accessToken = sessionStorage.getItem("token");
  //   if(accessToken)
  //   {
  //     request = request.clone({
  //       setHeaders: {
  //         Authorization: `JWT ${accessToken}`
  //       }
  //     });
  //   }
  //
  //   return next.handle(request).do((event: HttpEvent<any>) => {
  //     if (event instanceof HttpResponse) {
  //     }
  //   }, (err: any) => {
  //     if (err instanceof HttpErrorResponse) {
  //       if (err.status === 401) {
  //         this.router.navigate(['login']);
  //       }
  //     }
  //   });
  // }
}


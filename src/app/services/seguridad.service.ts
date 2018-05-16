import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';
import { LoggerService } from '../../agio-core';

@Injectable()
export class AuthService {
  private isAuth = false;
  // tslint:disable-next-line:no-inferrable-types
  private authToken: string = '';
  private name = '';

  constructor() {
    if (localStorage && localStorage.AuthService) {
      const rslt = JSON.parse(localStorage.AuthService);
      this.isAuth = rslt.isAuth;
      this.authToken = rslt.authToken;
      this.name = rslt.name;
    }
  }
  get AuthorizationHeader() {
    return this.authToken;
  }
  get isAutenticated() {
    return this.isAuth;
  }
  get Name() {
    return this.name;
  }

  public Login(isAuth: boolean, authToken: string, name: string) {
    this.isAuth = isAuth;
    this.authToken = authToken;
    this.name = name;
    if (localStorage) {
      localStorage.AuthService = JSON.stringify({ isAuth, authToken, name });
    }
  }
  public logout() {
    this.isAuth = false;
    this.authToken = '';
    this.name = '';
    if (localStorage) {
      localStorage.removeItem('AuthService');
    }
  }
}

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private auth: AuthService) {}
  get isAutenticated() {
    return this.auth.isAutenticated;
  }
  login(usr: string, pwd: string) {
    return new Observable(observable =>
      this.http
        .post('http://localhost:4321/login', { name: usr, password: pwd })
        .subscribe(
          data => {
            this.auth.Login(data['success'], data['token'], data['name']);
            observable.next(this.auth.isAutenticated);
          },
          (err: HttpErrorResponse) => {
            observable.error(err);
          }
        )
    );
  }
  logout() {
    this.auth.logout();
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.withCredentials && !this.auth.isAutenticated) {
      return next.handle(req);
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.auth.AuthorizationHeader)
    });
    return next.handle(authReq);
  }
}

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(@Optional() private out: LoggerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.out) {
      return next.handle(req);
    }
    const started = Date.now();
    let ok: string;
    return next.handle(req).pipe(
      tap(
        event => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        error => (ok = 'failed')
      ),
      finalize(() => {
        this.out.log(
          `Traza ${req.method} '${req.urlWithParams}' ${ok} in ${Date.now() -
            started} ms.`
        );
      })
    );
  }
}

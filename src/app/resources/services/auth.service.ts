import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginResponse: ResponseLogin;

  public clear(): void {
    this.loginResponse = undefined;
  }

  public isAuthenticated(): boolean {
    return Boolean(this.loginResponse?.jwt);
  }
}

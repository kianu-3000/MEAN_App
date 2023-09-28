import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  constructor(private jwtHelper: JwtHelperService) { }

  getToken() : string | null {
    return localStorage.getItem('jwt');
  }
}

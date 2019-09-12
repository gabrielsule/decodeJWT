import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DecodeService {

  constructor() {}

  decodeToken(token: string) {
    const tkn = token;
    const decoded = jwt_decode(tkn);
    console.log(decoded);
  }
}

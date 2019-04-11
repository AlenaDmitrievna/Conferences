import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5000/api/auth/';
constructor(private http: HttpClient) { }


signin(model: any) { 
  return this.http.post(this.baseUrl + 'signin', model)
  .pipe(
    map((response: any) =>
        {
           const userResponse = response;
           if (userResponse) {
                    localStorage.setItem('token', userResponse.token);
                    }
        }
    )
  );
  }
  signup(model: any){ //регистрация
    return this.http.post(this.baseUrl+'signup', model);
  }

}


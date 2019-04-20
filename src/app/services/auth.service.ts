import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Auth} from '../model/auth';
import {JwtResponse} from '../model/JwtResponse';
import {Observable} from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/auth/signin';

  private token : any[]; 

  
  constructor(private http: HttpClient) { }

  login(username:string, password:string): Observable<JwtResponse> {

    let  authmodel :Auth  = new Auth(username,password);

    return this.http.post<JwtResponse>(this.loginUrl, authmodel, httpOptions);

  }
 
logout() {

  window.sessionStorage.clear();

}

 public getToken(): string{

  return sessionStorage.getItem('accessToken');
}


}

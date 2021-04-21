
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';


//const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'http://localhost:8080/authenticate/';

const httpOptions = {
headers: new HttpHeaders({'Content-Type':'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

   JwtToken = {
    token: "" ,
   }
  storage: any;
  constructor(private http: HttpClient) { }
  

    login(username: string,password : string) : Observable<any> {
      const observable =this.http.post<any>(AUTH_API + 'signin', 
      {username, password}, httpOptions);
    
     observable.subscribe(res=>{
        if(res.jwt){
         localStorage.setItem("token",res.jwt);
        }
      });
      console.log(localStorage.getItem("token"));
      
      return observable;
    }

    register(username: string, email: string, password: string): Observable<any> {
      return this.http.post(AUTH_API + 'signup' ,  {
        username,
        email,
        password
      }, httpOptions);
    }

    getToken(){
      return this.storage.getItem('token');
    }

}



/*
  
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/authenticate/';

const httpOptions = {
headers: new HttpHeaders({'Content-Type':'application/json' })

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    login(username: string,password : string) : Observable<any> {
      return this.http.post(AUTH_API + 'signin' ,{username,password},httpOptions);
    }

    register(username: string, email: string, password: string): Observable<any> {
      return this.http.post(AUTH_API + 'signup' ,  {
        username,
        email,
        password
      }, httpOptions);
    }


}
*/
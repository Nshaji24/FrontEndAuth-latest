import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catch } from '../models/catch.model';
import { AuthService} from 'src/app/_services/auth.service';

const baseUrl = 'http://localhost:8080/catch';



  
@Injectable({
  providedIn: 'root'
})
export class CatchService {

   httpOptions = {
   // headers: HttpHeaders | undefined = undefined; //, 'Authorization': 'Bearer ' + this.authService.getToken()
    };
  

  constructor(private http: HttpClient,private authService : AuthService) { }


  getAll(): Observable<Catch[]> {
    return this.http.get<Catch[]>(baseUrl);
  }

  get(id: any): Observable<Catch> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
  
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByAngler(Angler: any): Observable<Catch[]> {
    return this.http.get<Catch[]>(`${baseUrl}?Angler=${Angler}`);
  }

}

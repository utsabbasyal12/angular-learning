import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WholesalerAPIService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>('https://localhost:7177/api/WholesalerAPI/GetAll');
  }

  addWholesaler(newWholesaler: any): Observable<any>{
    return this.http.post<any>('https://localhost:7177/api/WholesalerAPI/Add', newWholesaler);
  }
}

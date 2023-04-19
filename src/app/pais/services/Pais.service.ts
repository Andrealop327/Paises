import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string="https://restcountries.com/v3.1"
  
  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<any>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get(url)

  }
  
  buscarCapital(termino:string):Observable<any>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get(url)
  }

 detallePorCodePais(id:string):Observable<any>{
  const url = `${this.apiUrl}/alpha/${id}`
  return this.http.get(url)
 }

 getPaisRegion(region:string):Observable<any>{
  const url = `${this.apiUrl}/region/${region}`
  return this.http.get(url)
 }
 }

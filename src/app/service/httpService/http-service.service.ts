import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  token: any;

  constructor(private httpClient: HttpClient) { 
    this.token = localStorage.getItem('token')
  }

  post(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(token, url);
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.httpClient.post(url, data, isHeaderRequired && tokenOption)
  }

  get(url: string, isHeaderRequired: any = false, token: any = null) {
    // console.log( "Data");
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.httpClient.get(url, isHeaderRequired && tokenOption)
  }
  
  delete(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(token, url);
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.httpClient.delete(url, isHeaderRequired && tokenOption)
  }

  put(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(token, url);
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.httpClient.put(url, data, isHeaderRequired && tokenOption)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }

  post(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(data, url);
    let tokenOption = {headers: new HttpHeaders({"Authorization": token})};
    return this.httpClient.post(url, data, isHeaderRequired && tokenOption)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShortUrl } from './model/short-url';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShortenUrlService {

  constructor(private http:HttpClient) {}
  

  generateShortUrl(generateUrl: ShortUrl) {
    let endUrl = "http://localhost:8080/generate/shorturl";
   return this.http.post(endUrl,generateUrl, {
    responseType: 'text'
  });
  }

  getShortUrl(originalUrl: any) {
    let endUrl = "http://localhost:8080/geturl/"+originalUrl;
    return this.http.get(endUrl, {
     responseType: 'text'
   });
   }
}

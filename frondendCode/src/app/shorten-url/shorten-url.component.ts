import { Component, Input, OnInit } from '@angular/core';
import { ShortenUrlService } from '../shorten-url.service';
import { ShortUrl } from '../model/short-url';
import { UrlWithStringQuery } from 'url';
import { error } from 'console';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.css']
})
export class ShortenUrlComponent implements OnInit {

  @Input()
  errorMessage: string ='';
  @Input()
  isUnknownUrl: boolean = false;
  shortenUrl: string ="";
  url: string = "";
  urlShortened: boolean = false;
  possibleErrorMessages = ["Invalid Url","Duplicate URL","expired"];
  isErrorOccurred: boolean = false;
  constructor(private urlService: ShortenUrlService) { }

  ngOnInit(): void {
   
  }

  generateShortenUrl() {
    this.isErrorOccurred = false;
    const generateUrl : ShortUrl = {
      originalUrl: this.url,
      shortUrl: ''
    };
    this.urlService.generateShortUrl(generateUrl).subscribe(res=>{
      if(this.possibleErrorMessages.includes(res))
      {
        this.isErrorOccurred = true;
        this.errorMessage = res;
      }
      else{
      this.shortenUrl = res;
      }
    },error => {
      console.error(error);
    })
  }

}

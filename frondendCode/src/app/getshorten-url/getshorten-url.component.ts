import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShortenUrlService } from '../shorten-url.service';

@Component({
  selector: 'app-getshorten-url',
  templateUrl: './getshorten-url.component.html',
  styleUrls: ['./getshorten-url.component.css']
})
export class GetshortenUrlComponent implements OnInit {

  shortenUrl: any;
  originalUrl: string = "";
  errorMessage: string = "";
  warningMessages = ["Invalid Url", "Duplicate URL", "expired"];
  isUnknownUrl : boolean = false;
  isErrorMessageTrue: boolean = false;
  constructor(
    private route: ActivatedRoute, private urlService: ShortenUrlService) {
    this.route.params.subscribe(params => {
      this.shortenUrl = params['url'];
      console.log(params)
    });
    this.getShortUrl();
  }

  ngOnInit(): void {
  }
  getShortUrl() {
    this.urlService.getShortUrl(this.shortenUrl).subscribe(res => {
      if (this.warningMessages.includes(res)) {
        this.isErrorMessageTrue = true;
        this.errorMessage = res;
      }
      else if(res === "Url is not exist"){
        this.isUnknownUrl = true;
      }
      else {
        this.originalUrl = res;
        window.open(res, "_blank");
      }
    }, error => {
      console.error(error);
    })
  }

}

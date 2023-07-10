import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetshortenUrlComponent } from './getshorten-url/getshorten-url.component';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';

const routes: Routes = [
  { path: 'geturl/:url', component: GetshortenUrlComponent },
  { path: 'generateurl', component: ShortenUrlComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

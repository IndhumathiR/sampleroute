import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

import{RouterModule}from'@angular/router';
import { AboutComponent } from './about/about.component';


import { ServiceComponent } from './service/service.component';
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AboutComponent,
    ServiceComponent,
    WorkComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'header', component: HeaderComponent},
      {path: 'footer', component: FooterComponent},
      {path:'content', component: ContentComponent},
      {path:'about',component:AboutComponent},
      {path:'service',component:ServiceComponent},
      {path:'work',component:WorkComponent}
      
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


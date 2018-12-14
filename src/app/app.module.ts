import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { Headercomponent } from './header/header.component';
import { ServicesComponent } from './services/services.component'
import { ContactusComponent } from './contactus/contactus.component';
import { MyteammeetComponent } from './myteammeet/myteammeet.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

import {RouterModule,Routes} from '@angular/router';
import { InventionsComponent } from './inventions/inventions.component';






//provide the required routes
//List the routes---1. Home , 2. Service,3. Contact Us, 4.  Blog, 5 . my team meet  6.inventions

const appRoutes: Routes = [
  {
     path:'Home',
     component:HomeComponent 
  },

    
  
    {path:'Services',
    component:ServicesComponent
  },
  {
    path:'Blog',
    component:BlogComponent
  },
  {
    path: 'Myteammeet',
    component:MyteammeetComponent
  },
  {
    path:'Contactus',
    component:ContactusComponent
  },
  {
    path:'Inventions',
    component:InventionsComponent
  }
];
 


@NgModule({
  declarations: [
    AppComponent,
    Headercomponent,
    ServicesComponent,
    ContactusComponent,
    MyteammeetComponent,
    BlogComponent,
    HomeComponent,
    InventionsComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    
    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

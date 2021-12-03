import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about/us', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'support', component: SupportComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactsComponent,
    AboutUsComponent,
    NotFoundComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

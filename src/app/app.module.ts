import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceComponent } from './service/service.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjetComponent } from './projet/projet.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiceComponent,
    ProfileComponent,
    ProjetComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, ServiceComponent, ProfileComponent, ProjetComponent, FooterComponent]
})
export class AppModule { }

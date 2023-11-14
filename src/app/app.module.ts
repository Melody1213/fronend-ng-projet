import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './template/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LegalsComponent } from './pages/legals/legals.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    AccueilComponent,
    ConnexionComponent,
    ContactComponent,
    ErreurComponent,
    EvenementsComponent,
    InscriptionComponent,
    LegalsComponent,
    ProfilComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

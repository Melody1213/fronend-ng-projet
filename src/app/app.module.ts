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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { EventsPipe } from './shared/pipe/events.pipe';
import { OrganisationModule } from './organisation/organisation.module';
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
    UsersComponent,
    EventsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"cy2023-icc","appId":"1:834728831196:web:8167d34976ab752b2c2c19","storageBucket":"cy2023-icc.appspot.com","apiKey":"AIzaSyCe2PS9gJoYCD6sQeEVUoHZpQ2eo1mGSeU","authDomain":"cy2023-icc.firebaseapp.com","messagingSenderId":"834728831196","measurementId":"G-FR17NV2Q31"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    OrganisationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { OrgaMenuComponent } from './template/orga-menu/orga-menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

@NgModule({
  declarations: [
    OrgaMenuComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule,
  


  ]
})
export class OrganisationModule { }

import { Component } from '@angular/core';
import { EvenementI } from 'src/app/shared/models/evenments-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent {
  constructor(public events:EvenementsService){}
  // listevents: Array<EvenementI>;

  searchKeyword: string='';
  
 

}

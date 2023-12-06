import { Injectable } from '@angular/core';
import { EvenementI } from '../models/evenments-i';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore, collectionChanges, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  listeEvenements:Array<EvenementI> = [];

  constructor(private http:HttpClient,public firestore:Firestore) {
    this.getEvenements();
    let col = collection(this.firestore, 'events');
    this.items$ = collectionData(col);

    this.items$.subscribe({
      next: (ev) => {
        this.events = ev;
      
      },
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
   }
items$:Observable<any[]>;
events:any[]=[];

   /** Recevoir la liste des événements */
  getEvenements(){
    this.http.get<Array<EvenementI>>('assets/data/evenements.json').subscribe(
      {
        next:(ev) => {
          console.log("Données reçues du JSON", ev);
          this.listeEvenements = ev;
        },
        error:(er) => console.log(er),
        complete:() => console.log('Les événements ont été chargés')
      }
    )
  }
  /**
   * Envoyer un événement au serveur
   * @param ev Evenement à envoyer au serveur
   */
  setEvenement(ev:EvenementI){
    this.http.post('assets/data/evenements.json', ev).subscribe()
  }
}

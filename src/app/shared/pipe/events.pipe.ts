import { Pipe, PipeTransform } from '@angular/core';
import { EvenementI } from '../models/evenments-i';
@Pipe({
  name: 'events'
})
export class EventsPipe implements PipeTransform {

  transform(events: Array<EvenementI>, filtre: string): Array<EvenementI> {
	  return events.filter(
		  event => (
			  event.titre.toLowerCase().indexOf(filtre) > -1 ||
        event.horaires.debut.toLowerCase().indexOf(filtre) > -1 ||
        event.horaires.fin.toLowerCase().indexOf(filtre) > -1
		 )
	  );
  }

}

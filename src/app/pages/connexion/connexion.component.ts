import { Component } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
 

  
})
export class ConnexionComponent {
  constructor(public auth:AuthService){}
  onSubmit(){
    this.auth.login();

  }

}

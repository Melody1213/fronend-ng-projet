import { Injectable } from '@angular/core';
import { UsersI } from '../models/users-i';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient,private router:Router) {}

  authID = { id: '', mdp: '' };

  isLoggedin=false;

  logout(){
    this.isLoggedin=false;
  }

  login(){
    console.log(this.authID);
    
    return this.http.get<UsersI>(`assets/data/ids/${this.authID.id}@${this.authID.mdp}.json`).subscribe({
      complete: () => {
        
      },
    
      next: (p) => {
        this.router.navigateByUrl('/profil');
        this.isLoggedin=true;
        
      },
    

    });
  }
}

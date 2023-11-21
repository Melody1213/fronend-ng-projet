import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-orga-menu',
  templateUrl: './orga-menu.component.html',
  styleUrls: ['./orga-menu.component.css']
})
export class OrgaMenuComponent {
  constructor(public authService: AuthService) {}
}

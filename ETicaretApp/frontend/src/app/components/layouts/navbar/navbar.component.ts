import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { BasketService } from '../../baskets/services/basket.service';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    public _basket: BasketService,
    private _auth: AuthService,
    private _router: Router
  ) {
    this._basket.getCount();
  }

  logout() {
    console.log('tıklandı');
    this._auth.logout(() => {
      this._router.navigate(['/login']);
    });
  }
}

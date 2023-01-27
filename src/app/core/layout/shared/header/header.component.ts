import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { BottomSheetComponent } from '../../../../shared/bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private _bottomSheet: MatBottomSheet,
    public authService: AuthenticationService,
    private Router: Router
  ) {
    console.log(this.authService.currentUser$);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  logout() {
    this.authService.logout().subscribe(() => {});
    this.Router.navigate(['login']);
  }
}

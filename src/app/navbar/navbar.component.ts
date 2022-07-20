import { Component, OnInit } from '@angular/core';
import { faBell, faComment } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../_shared/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faBell = faBell;
  faComment = faComment;
  faEllipsisH = faEllipsisH;
  faUserAlt = faUserAlt;
  faSignOutAlt = faSignOutAlt;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout();
  }

  hi() {
    console.log('hi');
  }
}

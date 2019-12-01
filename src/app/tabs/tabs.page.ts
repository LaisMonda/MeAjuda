import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  private id_user: string;

  constructor(private router: Router) {
    if  (this.router.getCurrentNavigation().extras.state != null) {
      this.id_user = this.router.getCurrentNavigation().extras.state.id_user;
      console.log(this.id_user);
   }
  }

}

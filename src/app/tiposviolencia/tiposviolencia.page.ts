import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiposviolencia',
  templateUrl: './tiposviolencia.page.html',
  styleUrls: ['./tiposviolencia.page.scss'],
})
export class TiposviolenciaPage implements OnInit {
  private id_user: string;

  constructor(private router: Router) {
    if  (this.router.getCurrentNavigation().extras.state != null) {
      this.id_user = this.router.getCurrentNavigation().extras.state.id_user;
   }
   }

  ngOnInit() {
  }

  turnBack(){
    this.router.navigateByUrl('tabs/tab1');
  }
}

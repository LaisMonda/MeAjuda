import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.page.html',
  styleUrls: ['./sos.page.scss'],
})
export class SosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  turnBack(){
    this.router.navigateByUrl("/tabs/tab3");
  }
}

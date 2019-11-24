import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changePassword(){
    this.router.navigateByUrl('/change-password');
  }
  ajuda(){
    this.router.navigateByUrl('/ajuda');
  }
  denuncias(){
    this.router.navigateByUrl('/denuncias');
  }
  dados(){
    this.router.navigateByUrl('/dados');
  }


}

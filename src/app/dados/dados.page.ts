import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  turnBack(){
      this.router.navigateByUrl('/tabs/tab5');
  }
  

}

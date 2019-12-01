import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.page.html',
  styleUrls: ['./processo.page.scss'],
})
export class ProcessoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  turnBack(){
    this.router.navigateByUrl('tabs/tab1');
  }


}

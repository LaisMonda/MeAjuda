import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.page.html',
  styleUrls: ['./denuncias.page.scss'],
})
export class DenunciasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  turnBack(){
    this.router.navigateByUrl('/tabs/tab5');
}

}

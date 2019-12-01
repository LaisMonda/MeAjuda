import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Global } from 'src/global';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(private x: Global, private router: Router) {
    console.log(this.x.id);

  }

  minhaDenuncia(){
    this.router.navigateByUrl('/myhelp');
  }
  outraDenuncia(){
    this.router.navigateByUrl('/otherhelp');
  }
  tipos(){
    this.router.navigateByUrl('/tiposviolencia');
  }
  lei(){
    this.router.navigateByUrl('/lei');
  }
  processo(){
    this.router.navigateByUrl('/processo');
  }
}

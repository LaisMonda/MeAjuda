import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  private email: string;
  private pass: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  navegar(){
    this.router.navigateByUrl('/tab1');
  }

}

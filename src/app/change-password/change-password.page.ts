import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(private router: Router) { }
  private senha: string;
  private novaSenha: string;
  
  ngOnInit() {
  }
  
  turnBack(){
    this.router.navigateByUrl('/tabs/tab5');
}
}

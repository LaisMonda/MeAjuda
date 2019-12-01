import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/global';
import { SMS } from '@ionic-native/sms/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  constructor(private x: Global, private sms: SMS, private router: Router) {
    console.log(this.x.id);
  }

  denuncia(){
    this.router.navigateByUrl('/sos');
    this.sms.send('67999190692', 'Preciso de ajuda, estou em perigo!');
  }

  
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './core-module/services/user.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app';

  constructor(private router:Router, private userService:UserService) {
  	//Exécuté une seule fois au rechargement (démarrage)
  	if(localStorage.getItem('Dmineur')!==null){
  		this.userService.setUserConnected(JSON.parse(localStorage.getItem('Dmineur')));
  		this.redirect();
  	} else if(sessionStorage.getItem('Dmineur')!==null) {
  		this.userService.setUserConnected(JSON.parse(sessionStorage.getItem('Dmineur')));
  		this.redirect();
  	} else {
        //Avoid incorrect routing
      this.router.navigate(['/public']);
    }
  }


//Redirect the user to his own space
  public redirect(){
    console.log(this.userService.userConnected.profile);
  	switch(this.userService.userConnected.profile){
  		case 'guest':
            this.router.navigate(['/public']);
  			break;
  		case 'client':
            this.router.navigate(['/client']);
  			break;
  		case 'agent':
            this.router.navigate(['/agent']);
  			break;
  		case 'admin':
            this.router.navigate(['/admin']);
  			break;
  	}
  }
}

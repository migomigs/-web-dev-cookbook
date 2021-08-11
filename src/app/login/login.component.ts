import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { AuthService } from '../auth.service';

interface Credential {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, 
     private route: ActivatedRoute, 
     private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
       this.router.navigate(['/']);
    }
  }

  signIn(credential: Credential){
    this.authService.login(credential).subscribe(result =>{
       console.log('signIn result', result);
    });

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    console.log('returnUrl', returnUrl);
    this.router.navigate([returnUrl || '/']);
    
  }


}

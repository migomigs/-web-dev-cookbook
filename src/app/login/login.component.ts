import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  signIn(credential: Credential){
    this.authService.login(credential).subscribe(result =>{
       console.log('signIn result', result);
    });
  }
}

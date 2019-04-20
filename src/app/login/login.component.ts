import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoggedIn: boolean = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private auth:AuthService, private router: Router) { }
  

  ngOnInit() { }


  login(form: NgForm){

    let login = form.value;
    let username = login.username; //"saudapi";
    let password = login.password; //"saud1234";
    console.log(login.username);
    console.log(form.valid);
    
    if (form.valid){
      console.log("inside login call");
      this.auth.login(username,password).subscribe (
        data => {
          window.sessionStorage.setItem('accessToken',data.accessToken);
          window.sessionStorage.setItem('username',data.username);
          window.sessionStorage.setItem('authorities',JSON.stringify(data.authorities));
          console.log(data.timeout);
          this.isLoggedIn = true;
          setTimeout(()=>{
            this.isLoggedIn = false;
            sessionStorage.clear();
            this.router.navigateByUrl('/');
            alert(' Session Expired, Please login again ');
         },data.timeout)
          this.router.navigateByUrl('/home');
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
          alert(this.errorMessage);
        }

        
      );
    }
    console.log("loggend in saud");

  }

  
  
}

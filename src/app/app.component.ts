import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) {}
  
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAUzuveZxVGWE9gu7gYGPD-TgQ4i-YBD7U",
      authDomain: "listado-personas-ea3b5.firebaseapp.com"
    })
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}

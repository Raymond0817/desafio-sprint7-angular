import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  nome = '';
  senha = '';
  dataAtual = new Date();

  constructor(private router: Router) {}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  login() {
    if (this.nome !== 'admin' || this.senha !== '123456') {
      alert('Nome ou senha Invalidos');
    } else {
      this.router.navigate(['/home']);
    }
  }
}

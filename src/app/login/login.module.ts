import { NgModule, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, DatePipe
  ],
  exports: [LoginComponent]
})
export class LoginModule {

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}

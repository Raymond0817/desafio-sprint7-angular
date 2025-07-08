import { NgModule, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule, MatIconModule
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

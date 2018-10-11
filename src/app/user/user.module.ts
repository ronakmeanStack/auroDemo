import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user-routing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoute), NgxSpinnerModule,ReactiveFormsModule,FormsModule],
  declarations: [UserComponent]
})
export class UserModule {}

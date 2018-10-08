import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user-routing';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoute)],
  declarations: [UserComponent]
})
export class UserModule {}

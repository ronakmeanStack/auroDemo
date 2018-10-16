import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

//routing
import { adminRoute } from './admin.routing';
import { CreateuserComponent } from './createuser/createuser.component';
import { PermissiontableComponent } from './permissiontable/permissiontable.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoute)],
  declarations: [AdminComponent, CreateuserComponent, PermissiontableComponent, HomeComponent]
})
export class AdminModule {}

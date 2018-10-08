import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

//routing
import { adminRoute } from './admin.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoute)],
  declarations: [AdminComponent]
})
export class AdminModule {}

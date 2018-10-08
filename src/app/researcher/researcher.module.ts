import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearcherComponent } from './researcher.component';
import { RouterModule } from '@angular/router';
import { researcherRoute } from './researcher-routing';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(researcherRoute)],
  declarations: [ResearcherComponent]
})
export class ResearcherModule {}
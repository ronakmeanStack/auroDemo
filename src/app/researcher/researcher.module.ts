import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearcherComponent } from './researcher.component';
import { RouterModule } from '@angular/router';
import { researcherRoute } from './researcher-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [CommonModule, NgxSpinnerModule ,ToastrModule.forRoot(), RouterModule.forChild(researcherRoute),ReactiveFormsModule,FormsModule],
  declarations: [ResearcherComponent]
})
export class ResearcherModule {}
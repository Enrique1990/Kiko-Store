import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactComponent } from '../contact/components/contact.component';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [MatInputModule, MatButtonModule],
})
export class ContactModule {}

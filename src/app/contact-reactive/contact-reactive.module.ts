import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactReactiveRoutingModule } from './contact-reactive-routing.module';
import { ReactiveContactComponent } from '../form/reactive-contact/reactive-contact.component';

@NgModule({
  declarations: [ReactiveContactComponent],
  imports: [CommonModule, ContactReactiveRoutingModule, ReactiveFormsModule],
})
export class ContactReactiveModule {}

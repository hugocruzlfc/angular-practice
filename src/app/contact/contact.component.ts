import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

interface ContactForm {
  checkAdult: string;
  comment: boolean;
  department: string;
  name: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') contactForm!: NgForm;
  model = {
    checkAdult: false,
    comment: '',
    department: '',
    name: 'Hugo',
  };

  id!: string;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(params);
    });
  }

  onSubmit(): void {
    //this.contactForm.setValue(this.model);
    console.log(this.contactForm);
  }
  // onSubmit(values: ContactForm): void {
  //   console.log(values);
  // }
  // onSubmit(form: NgForm): void {
  //   console.log(form);
  // }
}

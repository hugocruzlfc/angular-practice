import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reactive-contact',
  templateUrl: './reactive-contact.component.html',
  styleUrls: ['./reactive-contact.component.scss'],
})
export class ReactiveContactComponent implements OnInit {
  contactForm!: FormGroup;
  name!: string;
  // myFiled = new FormControl(); para un solo campo
  departments: string[] = [];
  selectedCity$ = this.dataService.selectedCity$;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService
  ) {}

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['departments'];
    this.contactForm = this.initForm();
    //this.onSetValue();
    this.onPathValue();
    this.route.queryParams.subscribe(
      (params: Params) => (this.name = params['name'])
    );
  }

  onSubmit(): void {
    console.log('');
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    });
  }

  onSetValue(): void {
    this.contactForm.setValue({ comment: 'this a comment default' });
    // es para todas las propiedas
  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: 'Hugo' });
  }
}

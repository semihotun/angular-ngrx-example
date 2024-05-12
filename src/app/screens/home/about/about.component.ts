import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.InitForm();
  }
  aboutForm!: FormGroup;
  InitForm() {
    this.aboutForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
  submitForm() {
    if (this.aboutForm.valid) {
      this.aboutForm.reset();
    }
  }
  getUserForm(event: Event) {
    event.preventDefault();
    this.aboutForm.patchValue({
      name: 'se',
      surname: 'ot',
      gender: 'male',
    });
  }
  ngOnInit() {}
}

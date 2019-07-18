import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.scss']
})
export class SingleFormComponent implements OnInit {
@Input() formData:any;
  constructor() { }
form:FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      dob: new FormControl(''),
      email: new FormControl(''),
      budget: new FormControl(''),
      gender: new FormControl('')
    });
    this.form.setValue(this.formData);
  }

}

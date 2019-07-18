import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConstantStringEnum } from 'src/app/enums/constantStringEnum';
import { HomeBusinessLogicService } from 'src/app/services/home-business-logic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  constantStringEnum = ConstantStringEnum;
  
  constructor(private homeBusinessLogicService:HomeBusinessLogicService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      date_of_birth: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      budget: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
  
    });
  }

  async onSubmit() {
   let response = await this.homeBusinessLogicService.SaveForm(this.form.value);
  console.log(response);
  }
}

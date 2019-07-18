import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeBusinessLogicService {

  constructor(private httpService:HttpService) { }

  SaveForm(formData:any) {
    return this.httpService.saveForm(formData);
  }
}

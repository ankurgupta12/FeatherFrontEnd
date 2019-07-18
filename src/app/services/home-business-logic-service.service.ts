import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { IFormListTable } from '../interface/formlistinterface';

@Injectable({
  providedIn: 'root'
})
export class HomeBusinessLogicService {

  constructor(private httpService:HttpService) { }

  /**
   * @description Method for saving of Form Data
   * @return {Promise<any>} promise<any> 
   * @param {any} formData
   * @memberof  HomeBusinessLogicService
   */
  SaveForm(formData:any) {
    return this.httpService.saveForm(formData);
  }
  
  /**
   * @description Method for get  Form Data
   * @return {Promise<IFormListTable>} promise<IFormListTable> 
   * @memberof  HomeBusinessLogicService
   */
  GetFormList(start:number,end:number):Promise<IFormListTable> {
    return this.httpService.getFormList(start,end);
  }
}

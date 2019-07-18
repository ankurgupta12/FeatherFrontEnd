import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EndPoints } from '../enums/endpoints.enum';
import { IFormListTable } from '../interface/formlistinterface';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseurl;
  constructor(private http: HttpClient) { }

  /**
   * @description Method for saving of Form Data
   * @return {Promise<any>} promise<any> 
   * @param {any} formData
   * @memberof  HttpService
   */
  saveForm(formData: any): Promise<any> {
    const url = `${this.baseUrl}${EndPoints.formService}`;
    return this.http.post(url, formData).toPromise();
  }

  /**
   * @description Method for get Form Data
   * @return {Promise<IFormListTable>} IFormListTable 
   * @memberof HttpService
   */
  getFormList(start:number,end:Number): Promise<IFormListTable> {
    const url = `${this.baseUrl}${EndPoints.formService}?$limit=${end}&$skip=${start}`;
    return this.http.get<IFormListTable>(url).toPromise();
  }
}

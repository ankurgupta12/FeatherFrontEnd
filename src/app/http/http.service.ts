import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EndPoints } from '../enums/endpoints.enum';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseurl;
  constructor(private http: HttpClient) { }

  saveForm(formData: any): Promise<any> {
    const url = `${this.baseUrl}${EndPoints.formService}`;
    return this.http.post(url, formData).toPromise();
  }
}

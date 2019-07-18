import { Component, OnInit } from '@angular/core';
import { HomeBusinessLogicService } from 'src/app/services/home-business-logic-service.service';
import { IFormListTable } from 'src/app/interface/formlistinterface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formListData: IFormListTable;

  p: number = 1;
  total: number;
  /**
   * @description Method for constructor 
   * @param {HomeBusinessLogicService} homeBusinessLogicService
   * @memberof  FormsComponent
   */
  constructor(private homeBusinessLogicService: HomeBusinessLogicService) { }
  /**
   * @description Method for Init lifycycle
   * @memberof  FormsComponent
   */
   ngOnInit() {
    this.getPage(1);
  }
/**
   * @description Method for get Page detail
   * @memberof  FormsComponent
   */
  async getPage(page: number) {
    let data = await this.getData(page)
    this.total = data.total;
    this.p = page;
    this.formListData = data.data;
  }

  /**
   * @description Method for get Page detail
   * @param {number} page to get the page number
   * @memberof  FormsComponent
   */
  async getData(page: number) {
    const perPage = 10;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    let data: any = await this.homeBusinessLogicService.GetFormList(start, end);
    return data;

  }

}

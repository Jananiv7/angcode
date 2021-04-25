import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRoutingService } from './httpRouting.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private httpRoutingService: HttpRoutingService, private httpClient: HttpClient) { }
  // tslint:disable-next-line: typedef
  getDocumentList() {
    // tslint:disable-next-line: deprecation
   return this.httpRoutingService.postMethod('v1/getDocList', { date: null });
  }
  // tslint:disable-next-line: typedef
  getDocs(){
    return this.httpClient.post('https://verify.flexm.com/api/scans/scanDocByTenent', {
      Tenant_ID: '',
      limit: '10',
      pageNo: '1',
      order: '-1',
      search: '',
      fieldName: '',
      startDate: '2021-02-01T18:30:00.000Z',
      endDate: '2021-02-20T18:30:00.000Z',
      status: ''
  });
  }
  getDocDetails(id){
    return this.httpClient.get('https://verify.flexm.com/api/scans/allScanByDocumentId/'+id);
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  customerModelUrl = 'assets/customersModel.json';
  data: any = {
    customers: [],
    regions: [] 
  };

  constructor(private http: Http) { }

  getData() {
    this.http.get(this.customerModelUrl)        
    .subscribe((res) => {
      let data : any = {};
      let result = res.text();      
      data = JSON.parse(result);
      data.customers.map( c => {
        if (c.opportunities == undefined){
          c.opportunities = [{name: 'No data'}];    
        }
      });  
      this.data = data;   
    })   
   
   }

  }



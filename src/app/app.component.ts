import { Component } from '@angular/core';
import { DataService } from '../app/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dataServcie: DataService) {}

  ngOnInit(){
    this.dataServcie.getData();
    
  }
  
    get data(){

     return this.dataServcie.data;
   

  }
  

}

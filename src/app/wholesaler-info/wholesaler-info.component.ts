import { Component, OnInit } from '@angular/core';
import { WholesalerAPIService } from '../wholesaler-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wholesaler-info',
  templateUrl: './wholesaler-info.component.html',
  styleUrls: ['./wholesaler-info.component.css'],
  providers: [WholesalerAPIService]

})
export class WholesalerInfoComponent implements OnInit {
  data: any[] = [];
  newWholesaler: any= {};

  constructor(private apiService: WholesalerAPIService){}

  ngOnInit(): void {
    this.getWholesalers();
  }
  
  getWholesalers(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  } 

  addWholesaler(form: NgForm){
    this.apiService.addWholesaler(this.newWholesaler).subscribe(response => {
      console.log("Wholesaler added successfully", response);

      this.getWholesalers();

      form.reset();
    });
  }
}
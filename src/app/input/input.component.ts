import { Component, OnInit } from '@angular/core';

import {StockService} from '../stock-service.service';

import { Stock } from '../stock';

@Component({

  selector: 'app-input',

  templateUrl: './input.component.html',

  styleUrls: ['./input.component.css']

})

export class InputComponent implements OnInit {

  private presentStock:Stock;

  private previousStocks:Stock[]=[];



  constructor(private stockservice:StockService ) { }



  ngOnInit() {

  }

  getStock(name : any):void{

    this.presentStock=this.stockservice.stockNameEntered(name);

    this.presentStock.searchTime=(new Date()).toUTCString();

    this.previousStocks.push(this.presentStock);



  }

}
import { Injectable } from '@angular/core';

import {Stock} from './stock';

import {STOCKS} from './stock_data';

@Injectable()

export class StockService {

  private presentStock: Stock;

  stockNameEntered(name: any): Stock{

    for(var i=0;i<STOCKS.length;i++){

      if(STOCKS[i].name==name)

      return STOCKS[i];

    }



  }



  constructor() { }



}

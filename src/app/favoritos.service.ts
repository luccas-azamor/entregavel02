import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FavoritosService {
  ab: string[] = ["foo","bitcoin","litecoin","doge"];
  fav: string[] = ["bitcoin"];

  public coins:any;

  insertData(data){
    this.fav = ["kk"];
  }
  constructor() {

  interface CryptoCoin {
    index: number;
    name: string;
    value: number;
    favorite?: boolean;
  }
  
  function creatCoin(config: CryptoCoin): {index: number; name: string; value: number} {
      let newCoin = {index: config.index, name: config.name, value: config.value, favorite: false};
      if (config.favorite) {
        newCoin.favorite = true;
      }
      return newCoin;
  }

  let list_coins: CryptoCoin[] = [
    creatCoin({index: 0, name:"bitcoin", value:32102.82}),
    creatCoin({index: 1, name:"litecoin", value:220.87}),
    creatCoin({index: 2, name:"dogecoin", value:0.009467}),
    creatCoin({index: 3, name:"ethereum", value:685.48}),
    creatCoin({index: 4, name:"monero", value:224.80})
  ];

  this.coins = list_coins;

  }
}

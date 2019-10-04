import { Component } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  coins: any;


  constructor(private favoritosService: FavoritosService) { }
  deletarFavoritos(coin_index){
    this.favoritosService.coins[coin_index].favorite=false;
  }
  
  ionViewWillEnter() {
    this.coins = this.favoritosService.coins;
  }


}


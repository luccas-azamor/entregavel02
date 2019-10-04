import { Component } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  coins: any = this.favoritosService.coins;


  constructor(private favoritosService: FavoritosService) {
  }

  adicionarFavoritos(coin_index){
    this.favoritosService.coins[coin_index].favorite=true;
  }

}

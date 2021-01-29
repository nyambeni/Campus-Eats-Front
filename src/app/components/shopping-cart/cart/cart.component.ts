import { Component, OnInit } from '@angular/core';
import { CartRelayService } from 'src/app/services/cart-relay.service';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsInCart: Menu[] = [];


  totalCartPrice = 0; //initialise total to zero

  constructor(private relay: CartRelayService) { }

  ngOnInit() {
//**************************************** */
    this.relay.getRelay().subscribe((product: any) => {
    this.addItemsToCart(product)
      
    })
  }

  addItemsToCart(product: Menu){
    this.itemsInCart.push({
      id: 0,
      name: '',
      imagePath: '',
      qty: 0,
      price: 0,
      description: '',
      ingredients: ''
    })

    this.totalCartPrice = 0;
    this.itemsInCart.forEach(item => {
    this.totalCartPrice += (item.qty * item.price);

    })

  }

}

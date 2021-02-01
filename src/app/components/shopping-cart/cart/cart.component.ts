import { Component, OnInit } from '@angular/core';
import { CartRelayService } from 'src/app/services/cart-relay.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //itemsInCart: Menu[] = [];
  itemsInCart: any[] = [
    // { itemName: 'item1', qty: 2, price: 20},
    // { itemName: 'item2', qty: 4, price: 35}
  ];

  totalCartPrice = 0; //initialise total to zero

  constructor(private relay: CartRelayService) { }

  ngOnInit() {
    //**************************************** */
    this.relay.getRelay().subscribe((item: any) => {
      //this.addItemsToCart(item)
      //console.log(item)

      this.itemsInCart.push({
        itemName: item.name,
        qty: 1,
        price: item.price

      })

      this.totalCartPrice = 0;
      this.itemsInCart.forEach(items => {
        this.totalCartPrice += (items.qty * items.price);

      })

    })


  }



}

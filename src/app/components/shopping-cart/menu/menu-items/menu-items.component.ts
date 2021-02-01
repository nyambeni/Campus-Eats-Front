import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { CartRelayService} from 'src/app/services/cart-relay.service';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  @Input() menuItem: any;

  
  constructor(private relay : CartRelayService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.relay.sendRelay(this.menuItem);
  }

}

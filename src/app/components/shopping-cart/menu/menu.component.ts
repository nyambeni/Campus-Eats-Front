import { Component, OnInit } from '@angular/core';
import { MenuService} from 'src/app/services/menu.service';
import {Menu} from 'src/app/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  itemsOnMenu : Menu [] = [] //initialise items with type Menu
  

  constructor(private menuService : MenuService)  { }

  ngOnInit(): void {
    
    this.itemsOnMenu = this.menuService.getItems(); // lifecycle hook loads when application is done building 
  }

  

}

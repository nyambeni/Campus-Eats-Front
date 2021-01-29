import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


//this population will be done by APi
items : Menu[] = [
  {
    id: 1,
    name: 'Oliver Tambo',
    price: 20,
    imagePath: 'assets/assets/images/kota1.jpeg',
    ingredients: 'cheese, egg, chips, lettuce',
    description: 'Amandla',
    qty:1

},
{
  id: 2,
  name: 'Steve Biko',
  price: 25,
  imagePath: 'assets/assets/images/kota2.jpeg',
  ingredients: 'cheese, egg, chips, lettuce, russian',
  description: 'looking for liberation from the hunger? Look no further',
  qty:1
},
{
  id: 3,
  name: 'Robert Sobukwe',
  price: 30,
  imagePath: 'assets/assets/images/kota3.jpeg',
  ingredients: 'cheese, egg, chips, lettuce, extra russian',
  description: 'yummy yummy fill up your tummy',
  qty:1
},
{
  id: 4,
  name: 'Eskia Mpahlele',
  price: 35,
  imagePath: 'assets/assets/images/kota4.jpg',
  ingredients: 'cheese, egg, chips, lettuce, vegan russian,',
  description: 'Filling and fulfilling',
  qty:1
},
{
  id: 5,
  name: 'Winne Mandela',
  price: 40,
  imagePath: 'assets/assets/images/kota5.jpg',
  ingredients: 'cheese, egg, extra chips, lettuce, extra russian, ',
  description: 'Delicious and decedant',
  qty:1
},
{
  id: 6,
  name: 'Peter Mokaba',
  price: 45,
  imagePath: 'assets/assets/images/kota6.jpg',
  ingredients: 'extra cheese, extra egg, extra chips, extra lettuce, extra russian',
  description: 'Savory and satisfying',
  qty:1
}
];
  
 
  constructor() { }
  
  getItems() : Menu[]{
    //this population will be done by APi return observable
  return this.items;
  }

}

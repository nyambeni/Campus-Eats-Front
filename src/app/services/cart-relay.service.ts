import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { Menu } from 'src/app/models/menu';

@Injectable({
  providedIn: 'root'
})
export class CartRelayService {
  subject = new Subject;

  constructor() { }

  sendRelay(item: any) {
    console.log(item);  /* displaying on console */
    this.subject.next(item);
  }

  getRelay() {
    return this.subject.asObservable()
  }

}

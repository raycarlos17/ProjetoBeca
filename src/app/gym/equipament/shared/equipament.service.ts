import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipamentService {
cart=[]
constructor() { }

  add(e) {

    if (e.qty == 1) {
    this.cart.push(e)
    } else {
      for (let key in this.cart) {
        if (e.id == this.cart[key].id)
          this.cart[key].qty = e.qty

      }
    }
    console.log(this.cart)
  }
  remove(e) {
    for (let key in this.cart) {
      if (e.qty < 1) {
        if (e.id == this.cart[key].id) {
          var b = this.cart.indexOf(this.cart[key])
          this.cart.splice(b,1)
        }
      } else {

          if (e.id == this.cart[key].id)
            this.cart[key].qty = e.qty

        }
      }
      console.log(this.cart)
  }
}

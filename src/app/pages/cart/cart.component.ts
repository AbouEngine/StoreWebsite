import {Component, OnInit} from '@angular/core';
import {Cart, CartItem} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit{
  cart: Cart = { items: []};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
      'product',
      'name',
      'price',
      'quantity',
      'total',
      'action'
  ]

  constructor(private cartService: CartService) {}
  ngOnInit(): void{
      this.cartService.cart.subscribe((_cart) =>{
          this.cart = _cart;
          this.dataSource = this.cart.items;
      });
  }

  getTotal(items: Array<CartItem>): number {
      return this.cartService.getTotal(items);
  }
  onClearCart(): void{
      this.cartService.clearCart();
  }

    onRemoveFromCart(item: CartItem) {
        this.cartService.removeFromCart(item);
    }

    onAddQuantity(item: CartItem) {
      this.cartService.addToCart(item);

    }

    onRemoveQuantity(item: CartItem) {
      this.cartService.removeQuantity(item);

    }
}

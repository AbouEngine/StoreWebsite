import {Component, OnInit} from '@angular/core';
import {Cart, CartItem} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";
import {HttpClient} from "@angular/common/http";
import {loadStripe} from "@stripe/stripe-js";

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

  constructor(private cartService: CartService, private http : HttpClient) {}
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

    onCheckout() {
      this.http.post('http://localhost:4242/checkout', {items:this.cart.items})
          .subscribe(async (res:any) => {
              let stripe = await loadStripe('pk_test_51Nw8TwGOZAgh0uh8mwWFQaOoPJqvHj61SQfoOsk2EMpoRAVLd2p9KhzCjqkMBcvSZisz5aOQN8aJTIiLL8nmzQMr00RuZgFzjD');
              stripe?.redirectToCheckout({
                  sessionId: res.id
              })
          });
    }
}

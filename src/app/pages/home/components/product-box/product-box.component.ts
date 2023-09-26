import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../../models/product.model";

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',

})
export class ProductBoxComponent {
  @Input()
  fullWideMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'snickers',
    price: 150,
    category: 'shoes',
    description: 'description',
    image: 'https://via.placeholder.com/150'
  };
  @Output()
  addToCart = new EventEmitter();

    onAddToCart() {
      this.addToCart.emit(this.product);
    }
}

import { Component, Input } from '@angular/core';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() item: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  // TODO - Show active example of product
  addProductToCart(item: Product) {
    /*
    const product: string | null = localStorage.getItem('productList');

    if (product != null) {
      let currentProductList: Product[] = JSON.parse(product);
      const newProductList = [...currentProductList, item];

      localStorage.setItem('productList', JSON.stringify(newProductList));
    } else {
      localStorage.setItem('productList', JSON.stringify(item));
    }
      */
  }
}

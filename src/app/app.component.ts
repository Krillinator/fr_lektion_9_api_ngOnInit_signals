import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './types/Product';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lektion_9';

  // Prepare API
  productData: Product[] = [];

  // Student student = new Student(name: "Benny", password: "123")
  // TODO - private - scope
  // Answer - globally available throughout this single page
  constructor(private httpClient: HttpClient) {}

  // TODO - Personal: fix extension for intellisense
  // On Creation of component
  // ngOnInit = always executes ONCE

  ngOnInit() {
    console.log('Hello world :)');

    this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products') // Typesafety == ACHIEVED
      .subscribe((response: Product[]) => {
        this.productData = response;
      });
  }
}

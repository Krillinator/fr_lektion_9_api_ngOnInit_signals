import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lektion_9';

  // Prepare API
  productData: any; // WHY ANY? What do we do to change this...

  // Student student = new Student(name: "Benny", password: "123")
  // TODO - private - scope
  constructor(private httpClient: HttpClient) {}

  // TODO - Personal: fix extension for intellisense
  // On Creation of component
  // ngOnInit = always executes ONCE
  ngOnInit() {
    console.log('Hello world :)');

    this.httpClient
      .get('https://fakestoreapi.com/products')
      .subscribe((response) => {
        this.productData = response;
      });
  }
}

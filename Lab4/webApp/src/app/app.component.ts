import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component'; // Import ProductsComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent], // Import ProductsComponent
  template: '<app-products></app-products>', // Use it here
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component'; // Ensure ProductItemComponent is imported
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent], // Import ProductItemComponent and CommonModule
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[] = [];
  @Output() like = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}

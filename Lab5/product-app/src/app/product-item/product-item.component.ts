import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any; 
  @Output() like = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>(); 

  onLike() {
    this.like.emit(this.product.id); 
  }

  onRemove() {
    this.remove.emit(this.product.id); 
  }
}

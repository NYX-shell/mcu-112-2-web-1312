import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css'
})
export class ProductCardListComponent {
  @Input({ required: true }) products!: Product[];

  @Output()
  edit = new EventEmitter<Product>();

  @Output()
  remove = new EventEmitter<Product>();

  @Output()
  view = new EventEmitter<Product>();
}

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Product } from '../model/product';
import { map } from 'rxjs';
import { JsonPipe} from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import { IProductForm } from '../interface/product-form.interface';


@Component({
  selector: 'app-product-form-page',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './product-form-page.component.html',
  styleUrl: './product-form-page.component.css'
})
export class ProductFormPageComponent implements OnInit{
  private readonly route = inject(ActivatedRoute);

  form = new FormGroup<IProductForm>({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null),
    authors: new FormArray<FormControl<string | null>>([]),
    company: new FormControl<string | null>(null),
    isShow: new FormControl<boolean>(false, {nonNullable: true }),
    price: new FormControl<string | null>(null),
  })

  get authors(): FormArray<FormControl<string | null>>{
    return this.form.get('authors') as FormArray<FormControl<string | null>>;
  }

  product!:Product;

  ngOnInit(): void{
    this.route.data.pipe(
      map(({ product }: Data) => product)
    ).subscribe((product) => this.product = product);
  }

  onAddAuthors(): void{
  const formControl = new FormControl<string | null>(null);
    this.authors.push(formControl);
  }
}

import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface IProductForm {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  authors: FormArray<FormControl<string | null>>;
  company: FormControl<string | null>;
  isShow: FormControl<boolean>;
  price: FormControl<number | null>;
}

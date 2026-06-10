import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectCars } from '../car.selector';
import { Car } from '../../models/car';
import { addCar } from '../car.action';

@Component({
  selector: 'app-car-form',
  imports: [ReactiveFormsModule],
  templateUrl: './car-form.html',
  styleUrl: './car-form.css',
})
export class CarForm {

  private store = inject(Store)

  cars = this.store.selectSignal(selectCars)
  carForm = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    previewImage: new FormControl('', Validators.required)
  })



  onSubmit(){
    if(this.carForm.valid){
      const formVal = this.carForm.value
      const newCar:Car = {
        id: Math.floor(Math.random() * 10000),
        brand: formVal.brand!,
        model: formVal.model!,
        price: +formVal.price!,
        previewImage: formVal.previewImage!,
      }
      this.store.dispatch(addCar(newCar))
      this.carForm.reset()
    }
    console.log(this.carForm);
    
  }
}

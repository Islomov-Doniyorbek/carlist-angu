import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCars } from '../car.selector';
import { CurrencyPipe } from '@angular/common';
import { removeCar } from '../car.action';

@Component({
  selector: 'app-carlist',
  imports: [CurrencyPipe],
  templateUrl: './carlist.html',
  styleUrl: './carlist.css',
})
export class Carlist {

  private store = inject(Store)

  cars = this.store.selectSignal(selectCars)


  onDelete(carId:number){
    this.store.dispatch(removeCar({id: carId}))
  }
}

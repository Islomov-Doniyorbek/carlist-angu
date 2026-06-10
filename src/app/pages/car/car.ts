import { Component } from '@angular/core';
import { Carlist } from '../../cars/carlist/carlist';
import { CarForm } from '../../cars/car-form/car-form';

@Component({
  selector: 'app-car',
  imports: [Carlist, CarForm],
  templateUrl: './car.html',
  styleUrl: './car.css',
})
export class Car {}

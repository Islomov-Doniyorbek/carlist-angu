import { Routes } from '@angular/router';
import { Carlist } from './cars/carlist/carlist';
import { Car } from './pages/car/car';

export const routes: Routes = [
    {
        path: '', component: Car
    }
];

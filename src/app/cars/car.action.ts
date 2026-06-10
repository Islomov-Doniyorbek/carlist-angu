import { createAction, props } from "@ngrx/store";
import { Car } from "../models/car";



export const addCar = createAction('[CAR] Add Car', props<Car>())
export const removeCar = createAction(
    '[CAR] Remove Car', props<{id: number}>()
)
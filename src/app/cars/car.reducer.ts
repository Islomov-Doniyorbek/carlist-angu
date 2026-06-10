import { createReducer, on } from "@ngrx/store";
import { Car } from "../models/car";
import { addCar, removeCar } from "./car.action";



export const initialState: Car[] = [];

export const CarReducer = createReducer(
    initialState,
    on(addCar, (state, {id, brand, model, price, previewImage})=> 
        [...state, 
            {id, brand, model, price, previewImage}
        ]),
    on(removeCar, (state, action) => state.filter((car) => car.id !==action.id))
)
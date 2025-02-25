// import counterReducer from './features/CounterSlice'
import cartReducer from "./features/CartSlice";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store
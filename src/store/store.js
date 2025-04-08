import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice"


const storeBox = configureStore({
    reducer:{
        countKey:countSlice
    }
})

export default storeBox
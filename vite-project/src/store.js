import {configureStore} from '@reduxjs/toolkit'
import doctorReducer from "./slices/doctorSlice.js"
import userReducer from "./slices/userIdSlice.js"

export const store=configureStore({
    devTools:true,
    reducer:{
        doctors: doctorReducer,
        userId: userReducer
    }
})
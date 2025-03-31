import { createSlice } from "@reduxjs/toolkit";

const doctorSlice=createSlice({
    name:"doctors",
    initialState:[],
    reducers:{
        addDoctor(state,action){
            state.push(action.payload)
        }
    }
})

export const { addDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
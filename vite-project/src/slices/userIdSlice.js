import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"userID",
    initialState:"",
    reducers:{
        updateUserID(state,action){
            return action.payload;
        }
    }
})

export const { updateUserID } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import socialslice from '../slice/socialslice.js'



const socialslice=createSlice({
    name:'social',
    initialState:{
        books:[]
    },
    reducers:{
        addbook:(state,action) =>{
            console.log("addbook function",action.payload)
            state.books.push(action.payload)

        }
    }
})


export const {addbook}=socialslice.actions

export default socialslice.reducer;
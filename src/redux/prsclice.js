import { createSlice } from "@reduxjs/toolkit";



export const price = createSlice({
    name: "quantity",
    initialState: {
        value : 0,

    },
    reducers: {
        inc: (state) => {
            state.value += 100;
        },
        dec: (state) => {
            state.value -= 100;
        }
        }
        
    })

export const { inc,dec} = price.actions;
export default price.reducer;
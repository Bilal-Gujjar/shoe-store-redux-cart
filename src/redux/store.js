import { configureStore } from "@reduxjs/toolkit";
import cn from './slice'
import pr from './prsclice'
export const store = configureStore({
    reducer: {
        valuer : cn,
        price : pr
    }
    
    });

export default store
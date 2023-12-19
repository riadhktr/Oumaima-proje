import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./foodSlice";


export default configureStore({
    reducer:{
        Food: foodSlice
    }
})
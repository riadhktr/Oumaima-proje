import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    foods:[{
        title:"pizza",
        description:"delicious food mark"
    }]
}


const foodSlice = createSlice({
    name:"pizzaria",
    initialState,
    reducers:{
        setProduct:(state,action)=>{
            state.foods = action.payload;
            return state
        }
    }
})


export const {setProduct} = foodSlice.actions;
export default foodSlice.reducer
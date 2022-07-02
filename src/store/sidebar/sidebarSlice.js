import { createSlice } from "@reduxjs/toolkit";

const toggler={
    isOpen:localStorage.getItem("open") ?? true
}

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState:toggler,
    reducers:{
       reset:state=>{
        state.isOpen=true
       }
    },
    extraReducers:builder=>{
        builder
        .addCase
    }
})

export default sidebar
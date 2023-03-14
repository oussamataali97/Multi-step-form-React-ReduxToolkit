import { createSlice } from "@reduxjs/toolkit"

const initialState={
    userInfo:null,
    addons:{},
    plan:''
}

export const CatalogueSlice = createSlice({
    name:'catalogue',
    initialState,
    reducers:{
        updateUserInfo :(state,action)=>{
            console.log(action)
            state.userInfo=action.payload
        },
        updatePlan:(state,action)=>{
            state.plan=action.payload
        },
        updateAddons:(state,action)=>{
            state.addons=action.payload
        }
    }



})

export const  {updateUserInfo,updatePlan,updateAddons} = CatalogueSlice.actions

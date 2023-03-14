import { configureStore } from "@reduxjs/toolkit";
import { CatalogueSlice } from "./CatalogueSlice";
export const store = configureStore({

    reducer:{
        catalogue:CatalogueSlice.reducer,
    }
})
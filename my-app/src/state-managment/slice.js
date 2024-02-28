import { createSlice } from "@reduxjs/toolkit";

export const confettiSlice = createSlice({
    name:'confetti',
    initialState:{
        isConfettiActive:false
    },
    reducers:{
        activateConfetti:(state) => {
            state.isConfettiActive = true
        },
        deactivateConfetti:(state) => {
            state.isConfettiActive = false
        }
    }
})


export const {activateConfetti, deactivateConfetti}  = confettiSlice.actions;
export default confettiSlice.reducer;
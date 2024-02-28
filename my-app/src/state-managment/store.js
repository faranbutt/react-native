import { configureStore } from "@reduxjs/toolkit";
import confettiReducer from './slice';
export default configureStore({
    reducer:{
        confetti:confettiReducer
    }
})
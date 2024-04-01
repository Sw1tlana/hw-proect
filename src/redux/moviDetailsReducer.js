import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    movieData: null,
    isLoading: false,
    isError: false
}

const movieSlice = createSlice({
  name: "movieDetails",
  initialState: INITIAL_STATE,
  reducers: {
    setMovieData(state, action) {
        state.movieData.push(action.payload);
    },
    setIsLoading(state, action) {
        state.isLoading = action.payload;
    },
    setIsError(state, action) {
        state.isError = action.payload;
    }
  },
});


export const { setMovieData, setIsLoading, setIsError } = movieSlice.actions;

export const movieDetailsReducer = movieSlice.reducer;

// export const movieDetailsReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case "details/setMovieData":
//             return { ...state, movieData: action.payload };
//         case "details/setIsLoading":
//             return { ...state, isLoading: action.payload };
//         case "details/setIsError":
//             return { ...state, isError: action.payload };
//         default:
//             return state;
//     }
// }
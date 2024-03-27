const INITIAL_STATE = {
    movieData: null,
    isLoading: false,
    isError: false
}

export const movieDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "details/setMovieData":
            return { ...state, movieData: action.payload };
        case "details/setIsLoading":
            return { ...state, isLoading: action.payload };
        case "details/setIsError":
            return { ...state, isError: action.payload };
        default:
            return state;
    }
}
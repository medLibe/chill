import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../../services/api/ApiMoviesList';

// Async thunks
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await getMovies();
    return response;
});

// Slice
const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
    },
});

export default moviesSlice.reducer;

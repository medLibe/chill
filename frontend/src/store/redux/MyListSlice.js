import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMyList, addMovie, deleteMovie } from '../../services/api/ApiMoviesList';

// Async thunks untuk daftar pribadi
export const fetchMyList = createAsyncThunk('myList/fetchMyList', async () => {
    const response = await getMyList();
    return response;
});

export const addMovieToMyList = createAsyncThunk('myList/createMovie', async (newMovie) => {
    const response = await addMovie(newMovie);
    return response;
});

export const removeMovieFromMyList = createAsyncThunk('myList/removeMovie', async (id) => {
    await deleteMovie(id);
    return id;
});

// Slice untuk daftar pribadi
const myListSlice = createSlice({
    name: 'myList',
    initialState: {
        myList: [],
        status: 'idle',
        error: null,
        showCloseButton: false,
        showAddModal: false,
    },
    reducers: {
        toggleCloseButton: (state) => {
            state.showCloseButton = !state.showCloseButton;
        },
        toggleAddModal: (state) => {
            state.showAddModal = !state.showAddModal;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMyList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMyList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.myList = action.payload;
            })
            .addCase(fetchMyList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addMovieToMyList.fulfilled, (state, action) => {
                state.myList.push(action.payload);
            })
            .addCase(removeMovieFromMyList.fulfilled, (state, action) => {
                state.myList = state.myList.filter(movie => movie.id !== action.payload);
            });
    },
});

export const { toggleCloseButton, toggleAddModal } = myListSlice.actions;

export default myListSlice.reducer;

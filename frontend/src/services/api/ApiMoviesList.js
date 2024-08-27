import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getMyList = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/my-list`);
        return response.data;
    }catch(error){
        console.error('Error getting my movie list:', error);
        throw error;
    }
}

// get movies list
export const getMovies = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/movies-list`);
        return response.data;
    }catch(error){
        console.error('Error getting movies:', error);
        throw error;
    }
};

// add movies
export const addMovie = async (newMovie) => {
    try{
        const response = await axios.post(`${BASE_URL}/my-list`, newMovie);
        return response.data;
    }catch(error){
        console.error('Error adding movie:', error);
        throw error;
    }
};

// delete movies
export const deleteMovie = async (id) => {
    try{
        const response = await axios.delete(`${BASE_URL}/my-list/${id}`);
        return response.data;
    }catch(error){
        console.error('Error deleting movie:', error);
        throw error;
    }
}
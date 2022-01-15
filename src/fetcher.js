import axios from 'axios';

// All of your API requests should be in this file

// declare the website url API taken from website 

const API = "801bc141deb8a0080cc3fedd1b47c2a3";
const url = "https://api.themoviedb.org"

// get all trending movies
export const getTrendingMovies = async () => {
    try {
      const response = await axios.get(
        `${url}/3/trending/movie/week?api_key=${API}`
      );
      return response.data;
    } catch (error) {
      console.log("Error while fetching the movie:" + getTrendingMovies.name + "\n" + error);
    }
  };
  
  // get movies by search term (keyword) and year to be displyed as movie list
  export const getMovies = async (keyword, year) => {
    try {
      const response = await axios.get(
        `${url}/3/search/movie?api_key=${API}&query=${keyword}&year=${year}`
      );
      return response.data;
    } catch (error) {
      console.log("Error while fetching the movie: " + getMovies.name + "\n" + error);
    }
  };
  
  // get list of genres
  export const getGenresList = async () => {
    try {
      const response = await axios.get(
        `${url}/3/genre/movie/list?api_key=${API}`
      );
      return response.data.genres;
    } catch (error) {
      console.log("Error while fetching the movie: " + getGenresList.name + "\n" + error);
    }
  };

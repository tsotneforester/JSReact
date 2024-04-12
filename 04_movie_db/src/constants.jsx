export const filter = {
  poster_path: null,
  original_language: "ja",
  release_date: 1889,
  vote_average: 0,
};

export const key = "ca13458cc8f7d31e877d4c3e5247aac9";
export const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`;
export const popularAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
export const genresAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`;

export const API_END_POINT = "http://localhost:3000/api/v1/user"

//api calling headers and information
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDUzMjIwMGJhYWM1MjVkMGE4N2E5MGFmNmE4YzJkOCIsIm5iZiI6MTcyMjQ0MjI1OC44OTM0NjgsInN1YiI6IjY2MGMyMWYxZDQwMGYzMDE2NDA1M2I2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LYQxJ6BH6Zo9yl_fZlndwbAbWvW3OatoU1ffc6syFA8'
    }
  };

  export const NOW_PLAYING_MOVIE = "https://api.themoviedb.org/3/movie/now_playing"
  export const popular = "https://api.themoviedb.org/3/movie/popular"
  export const toprated = "https://api.themoviedb.org/3/movie/top_rated"
  export const upcoming = "https://api.themoviedb.org/3/movie/upcoming"
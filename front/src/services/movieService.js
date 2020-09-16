import http from "./httpService";
import { apiUrl } from "../config.json";

const apiUrlRequest = apiUrl + "/movies";

function movieUrl(id) {
  console.log(`${apiUrlRequest}/${id}`);
  return `${apiUrlRequest}/${id}`;
}

export function getMovies() {
  return http.get(apiUrlRequest);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiUrlRequest, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

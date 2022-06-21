import axios from 'axios';

const API_KEY = '?api_key=ad8c6c4dd7f8a685c9c739255442ccd5';

const axiosRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export function FetchTrends() {
  return axiosRequest(`trending/movie/day${API_KEY}&page=1`).then(res => {
    if (!(res.status >= 200 && res.status < 300)) {
      throw Error(res.statusText);
    }
    return res;
  });
}

export function FetchMovieByName(movieName) {
  return axiosRequest(`search/movie${API_KEY}&query=${movieName}&page=1`).then(
    res => {
      if (!(res.status >= 200 && res.status < 300)) {
        throw Error(res.statusText);
      }
      return res;
    }
  );
}

export function FetchMovieById(ID) {
  return axiosRequest(`movie/${ID}${API_KEY}&language=en-US`).then(res => {
    if (!(res.status >= 200 && res.status < 300)) {
      throw Error(res.statusText);
    }
    return res;
  });
}

export function FetchMovieCast(ID) {
  return axiosRequest(`/movie/${ID}/credits${API_KEY}`).then(res => {
    if (!(res.status >= 200 && res.status < 300)) {
      throw Error(res.statusText);
    }
    return res;
  });
}

export function FetchMovieReviews(ID) {
  return axiosRequest(
    `/movie/${ID}/reviews${API_KEY}&language=en-US&page=1`
  ).then(res => {
    if (!(res.status >= 200 && res.status < 300)) {
      throw Error(res.statusText);
    }
    return res;
  });
}

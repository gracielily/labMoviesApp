

const _fetchData = (urlToFetch) => {
  return fetch(
    urlToFetch
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
}

const _buildQueryStr = (queryParams) => {
  let queryParamStr = ""
  for (const [key, value] of Object.entries(queryParams)) {
    queryParamStr += `&${key}=${value}`
  }
  return queryParamStr;
}


export const getMovies = (page, queryParams) => {
  const queryParamStr = _buildQueryStr(queryParams)
  return _fetchData(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}${queryParamStr}`
  )
};

  
export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return _fetchData(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
};

  
  export const getMovieGenres = async () => {
    return _fetchData(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    )
  };


  export const getLanguages = async () => {
    return _fetchData(
      "https://api.themoviedb.org/3/configuration/languages?api_key=" +
        import.meta.env.VITE_TMDB_KEY
    )
  };
  
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id, type } = idPart;
    return _fetchData(
      `https://api.themoviedb.org/3/${type}/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
  };
  

  export const getMovieReviews = (type, id) => {
    return fetch(
      `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      });
  };

  export const getUpcomingMovies = () => {
    return _fetchData(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    )
  };

  
  export const getTopRatedMovies = () => {
    return _fetchData(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    )
  };


  export const getTvShows = (pageNum) => {
    return _fetchData(
      `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${pageNum}&sort_by=popularity.desc`
    )
  };

  export const getTvShow = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return _fetchData(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
  };


  export const getTrendingActors = () => {
    return _fetchData(
      `https://api.themoviedb.org/3/trending/person/day?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
    )
  };

  export const getActor = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return _fetchData(
      `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
  };


  export const searchForMovie = (searchParams) => {
    const queryParamStr = _buildQueryStr(searchParams)
    return _fetchData(
      `https://api.themoviedb.org/3/search/${searchParams.media_type}?api_key=${import.meta.env.VITE_TMDB_KEY}${queryParamStr}`
    )
  };

  export const getActorCredits = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return _fetchData(
      `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
  }


  export const getSimilarMedia = (type, movieId) => {
    return _fetchData(
      `https://api.themoviedb.org/3/${type}/${movieId}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
  };

  export const getVideosFor = (type, id) => {
    return _fetchData(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
  }


  
  
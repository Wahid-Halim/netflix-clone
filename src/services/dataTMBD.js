const token = import.meta.env.VITE_TMDB_API_TOKEN;


const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getMovies = async (categories) => {
  console.log(categories, "hello");
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${categories}?language=en-US&page=1`,
    options
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.status}`);
  }
  const data = await res.json();
  return data;
};

export const getMoviesVideo = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch movie videos: ${res.status}`);
  }
  const data = await res.json();
  return data;
};

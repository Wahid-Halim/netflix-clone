const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWViOTlkMzNiNzRiOThjM2EwYzVlNDA3MGUzM2UwZSIsIm5iZiI6MTc1Mzg4MDgxNS40MzcsInN1YiI6IjY4OGExOGVmZjhiNWVkNmMyYmUxM2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JuTTc9ex3D5zq-NQaViqOk5P4L1b_Dyci4gDQjrm4SA",
  },
};

export const getMovies = async (categories) => {
  console.log(categories, "hello");
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${categories}?language=en-US&page=1`,
    options
  );
  const data = await res.json();
  return data;
};

export const getMoviesVideo = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  );
  const data = await res.json();

  return data;
};

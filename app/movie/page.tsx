import MovieTotal from "../../components/movie/movieTotal-info";

export const MovieAPI = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function MovieAPIJson() {
  await new Promise((resolve) => setTimeout(resolve, 1));
  const response = await fetch(MovieAPI);
  const json = await response.json();
  return json;
}

export default async function movieTotal() {
  const movies = await MovieAPIJson();
  return (
    <div>
      {movies.map((movie) => (
        <MovieTotal
          key={movie.id}
          img={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

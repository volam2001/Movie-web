import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCart from "../component/movie/MovieCart";
const MoviePage = () => {
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=95f2419536f533cdaa1dadf83c606027"
  );
  const [value, setValue] = useState();
  const { data } = useSWR(url, fetcher);
  const movies = data?.results || [];
  useEffect(() => {
    if (value)
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=${value}`
      );
    else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=95f2419536f533cdaa1dadf83c606027`
      );
    }
  }, [value]);
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 outline-none"
            placeholder="Type here to search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies?.length > 0 &&
          movies.map((item) => (
            <MovieCart key={item.id} item={item}></MovieCart>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;

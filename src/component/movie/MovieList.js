import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCart from "./MovieCart";
import useSWR from "swr";
import { fetcher } from "../../config";
const MovieList = ({ types = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${types}?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );

  useEffect(() => {
    setMovies(data?.results);
  }, [data]);
  console.log(movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies?.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCart item={item}></MovieCart>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;

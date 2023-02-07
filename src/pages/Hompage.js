import React from "react";
import Banner from "../component/banner/Banner";
import MovieList from "../component/movie/MovieList";

const Hompage = () => {
  return (
    <>
      <Banner></Banner>
      <section className="movies-layout mt-10 page-container mb-20">
        <h2 className=" capitalize text-white mb-10 text-3xl font-bold ">
          Now Playing
        </h2>
        <MovieList></MovieList>
      </section>

      <section className="movies-layout mt-10 page-container mb-20">
        <h2 className=" capitalize text-white mb-10 text-3xl font-bold ">
          Top Rated
        </h2>
        <MovieList types="top_rated"></MovieList>
      </section>

      <section className="movies-layout mt-10 page-container mb-20">
        <h2 className=" capitalize text-white mb-10 text-3xl font-bold ">
          Trending
        </h2>
        <MovieList types="popular"></MovieList>
      </section>
    </>
  );
};

export default Hompage;

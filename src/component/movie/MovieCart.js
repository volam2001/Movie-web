import React from "react";
import { useNavigate } from "react-router-dom";
const MovieCart = ({ item }) => {
  const { id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-cart rounded-lg p-3 bg-slate-800 ">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
        className="w-full h-[300px] object-cover rounded-lg mb-5"
      />
      <h3 className=" font-bold text-xl text-white mb-3 h-[50px]">
        {item.title}
      </h3>
      <div className="flex items-center text-white justify-between text-sm text-opacity-60 mb-10 ">
        <span>{new Date(item.release_date).getFullYear()}</span>
        <span>{item.vote_average}</span>
      </div>
      <button
        onClick={() => navigate(`/movie/${id}`)}
        className="py-3 px-6  rounded-lg capitalize bg-primary text-white w-full font-semibold  "
      >
        Watch Now
      </button>
    </div>
  );
};

export default MovieCart;

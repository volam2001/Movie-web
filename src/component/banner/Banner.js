import React from "react";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[400px]  page-container overflow-hidden">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies?.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  return (
    <div className="w-full h-full rounded-lg bg-white relative ">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
        className="w-full h-full object-cover object-top rounded-lg"
      />
      <div className=" absolute left-5 bottom-5 w-full text-white">
        <h2 className=" font-bold text-3xl mb-5">{item.title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md ">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md ">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md ">
            Adventure
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium ">
          Watch Now
        </button>
      </div>
    </div>
  );
}
export default Banner;

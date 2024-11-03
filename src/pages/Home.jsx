import React from "react";
import { MovieList } from "../components/MovieList";
import { Carousel } from "../components/Carousel";
import { Diff } from "../components/Diff";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <>
      <Carousel />
      <Hero/>
      <MovieList />
      <Diff/>
    </>
  );
};

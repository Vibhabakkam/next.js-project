"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "./Loaders/HamLoader";
import HamLoader from "./Loaders/HamLoader";

const HomeComponent = () => {
  const [moiveData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getmovie = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/movies", {
          page: page,
        });

        if (response.status === 200) {
          setMovieData((pre) => pre.concat(response.data.moiveData));
        } else if (response.status === 400) {
          alert(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getmovie();
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= contentHeight - 10) {
        setPage((pre) => pre + 1);
        setLoader((pre) => true);
        setTimeout(() => {
          setLoader((pre) => !pre);
        }, 500);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(loader);

  return (
    <>
      <main className="bg-[rgb(184,209,234)] w-full min-h-screen pt-14 pb-10 flex justify-evenly items-center flex-wrap px-10">
        {loader ? (
          <HamLoader />
        ) : (
          <div className="flex flex-wrap justify-around w-full h-full">
            {moiveData &&
              moiveData.map((e, i) => (
                <Link
                  href={`/home/singelPage/${e.id}`}
                  className="w-[250px] my-5 flex flex-col cursor-pointer rounded-md border shadow-lg text-blue-950 font-bold"
                  key={i}
                >
                  <div className="border h-96 rounded-md">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                      alt="movie"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <p className="h-10 flex justify-center items-center">
                    {e.original_title}
                  </p>
                  <p className="h-8 flex justify-center items-center">
                    Ratings:{" "}
                    <span className="text-red-700"> {e.vote_average}</span>
                  </p>
                </Link>
              ))}
          </div>
        )}
      </main>
    </>
  );
};

export default HomeComponent;

import axios from "axios";
import Link from "next/link";
import React from "react";

const getMovie = async (id) => {
  const response = await axios.get(`http://localhost:3000/api/search/${id}`);

  if (!response) {
    response.data.message;
  }
  return response.data.result.results;
};

const SearchMovie = async ({ params }) => {
  const { id } = params;
  const moiveData = await getMovie(id);

  return (
    <>
      <main className="bg-[rgb(184,209,234)] w-full min-h-screen pt-14 pb-10 flex justify-evenly items-center flex-wrap px-10">
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
      </main>
    </>
  );
};

export default SearchMovie;

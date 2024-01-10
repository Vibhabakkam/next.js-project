import axios from "axios";

import { NextResponse } from "next/server";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

export async function GET(request, { params }) {
  const { id } = params;

  if (!id)
    return NextResponse.json({ messge: "Id not found" }, { status: 400 });

  const movieDetails = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  const castDetails = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  if(!movieDetails && !castDetails) return NextResponse.json({ messge: "Data not Fetch" }, { status: 400 })

  return NextResponse.json(
    { movieDetails: movieDetails.data, castDetails: castDetails.data },
    { status: 200 }
  );
}

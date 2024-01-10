import axios from "axios";
import { NextResponse } from "next/server";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

export async function GET(request, { params }) {
  const { id } = params;

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${id}`
  );

  if (!response) {
    return NextResponse.json({ message: "Data not fetched" }, { status: 400 });
  }

  return NextResponse.json({ result: response.data }, { status: 200 });
}

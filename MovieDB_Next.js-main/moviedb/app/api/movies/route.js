import { NextResponse } from "next/server";
import axios from "axios";

 const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

export async function POST(request) {
  try {

    const {page} = await request.json();

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    if (response.data) {
      return NextResponse.json(
        { moiveData: response.data.results },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Data not fetch" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

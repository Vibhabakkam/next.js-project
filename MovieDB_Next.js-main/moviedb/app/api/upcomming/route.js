import axios from "axios";
import { NextResponse } from "next/server";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

export async function GET(){
    try {

        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

        if(!response) return NextResponse.json({message:`Data not fetch`},{status:400});

        return NextResponse.json({upcomming:response.data.results},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:`Connection errror ${error}`},{status:500})
    }
}
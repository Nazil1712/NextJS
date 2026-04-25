import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    /* There are 2 ways of reading headers */

    // 1)
    /* const requestHeaders = new Headers(request.headers)
    console.log("Request  Headeers", requestHeaders) */

    // 2)
    const headersList = await headers(); // This return only read only me==
    console.log(headersList.get("Authorization"))


    // return new Response("Profile API Data")

    /* How to set Custom headers */
    return new Response("<h1>Profile API Data",{
        headers: {
            "Content-Type":"text/html"
        }
    })

}   
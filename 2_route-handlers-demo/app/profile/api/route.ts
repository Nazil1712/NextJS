import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//     /* There are 2 ways of reading headers */

//     // 1)
//     /* const requestHeaders = new Headers(request.headers)
//     console.log("Request  Headeers", requestHeaders) */

//     // 2)
//     const headersList = await headers(); // This return only read only me==
//     console.log(headersList.get("Authorization"))


//     // return new Response("Profile API Data")

//     /* How to set Custom headers */
//     return new Response("<h1>Profile API Data",{
//         headers: {
//             "Content-Type":"text/html"
//         }
//     })

// }   



/* Ways to hadle Cookies */
export async function GET(request: NextRequest) {

    // 1st Approach
    /* const theme = request.cookies.get("theme")
    console.log(theme)

    return new Response("<h1> Profile API Data </h1>", {
        headers: {
            'Set-Cookie': "theme=dark"
        }
    }) */


    // 2nd Approach
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage","20");

    // To get
    const results = cookieStore.get("resultsPerPage")
    
    console.log("Cookies",results)
    
    // Other Methods ==> cookieStore.has(), cookieStore.delete()

    return new Response("OK")



}
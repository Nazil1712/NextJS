export const dynamic  = "force-static" // This line caches the time

// To see the cached data We need to do 
// *********************===>>>> "npm run build" and then "npm start"

// But What If we want to update the time without rebuilding our application?
// For that we can add this
export const revalidate = 10;  // Now time [dynamic details] will be updated every 10 seconds - But in between 10 seconds time frame it will use cached time 


export async function GET() {
    return Response.json({time: new Date().toLocaleTimeString()})
}
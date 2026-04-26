// This line ensures that the response is cached and served instantly to all users
export const dynamic = "force-static"; 
// But because we don't have the Dynamic data in this page, Hence let's try it on time/route.ts


export async function GET() {

    const categories = [
        {id: 1, name: "Electronics"},
        {id: 2, name: "Books"},
        {id: 3, name: "Clothing"},
        {id: 4, name: "Home & Garden"},
    ]

    return Response.json(categories)
}
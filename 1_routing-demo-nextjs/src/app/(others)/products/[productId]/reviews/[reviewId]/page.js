import { notFound} from "next/navigation";


function getRandomInt(number) {
    return Math.floor(Math.random() * number)

    
    
    // ... * 1  ==> 0
    // ... * 2  ==> 0, 1
    // ... * 3  ==> 0, 1, 2
    // ... * 4  ==> 0, 1, 2, 3
    
   
}

export default async function ReviewsDetails({params}) {
    const {reviewId, productId} = await params;
    const random = getRandomInt(2);


    if(random == 1) {
        throw new Error("Error loading reveiew")
    }

 
    if(Number(reviewId) > 1000) {
        notFound();
        
        /* Calling redirect() function */
        // redirect("/products")
    }
    
    return (
        <>
        <h1>Review No # {reviewId} and Product No # {productId}</h1>
        </>
    )
}
import {notFound} from "next/navigation";


export default async function ReviewsDetails({params}) {
    const {reviewId, productId} = await params;

    if(Number(reviewId) > 1000) {
        notFound();
    }
    
    return (
        <>
        <h1>Review No # {reviewId} and Product No # {productId}</h1>
        </>
    )
}
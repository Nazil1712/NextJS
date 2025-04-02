export default function Reviews({params}) {
    const {reviewId, productId} = params;

    return (
        <>
        <h1>Review No # {reviewId} and Product No # {productId}</h1>
        </>
    )
}
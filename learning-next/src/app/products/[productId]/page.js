export default function ProductDetails({params}) {
    
    const {productId} = params;

    return (
        <>
        
        <h1>Details of Product #{productId}</h1>
        </>
    )
}
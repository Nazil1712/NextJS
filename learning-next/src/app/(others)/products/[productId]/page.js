export const generateMetadata = async({params}) =>{
    const {productId} = await params

    return {
        title : `Product ${productId}`
    }
}


export default async function ProductDetails({params}) {
    
    const {productId} = await params;

    return (
        <>
        
        <h1>Details of Product #{productId}</h1>
        </>
    )
}
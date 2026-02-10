export const generateMetadata = async({params}) =>{
    const {productId} = await params

    return {
        title : `Product ${productId}`
    }
}


// function getRandomInt(number) {
//     return Math.floor(Math.random() * number)

//     /* 
    
//         ... * 1  ==> 0
//         ... * 2  ==> 0, 1
//         ... * 3  ==> 0, 1, 2
//         ... * 4  ==> 0, 1, 2, 3
    
//     */
// }


export default async function ProductDetails({params}) {

    // const randomNumber = getRandomInt(2); // 0 OR 1

   /*  if(randomNumber === 1) {
        throw new Error("Error Loading Product!")
    }
     */
    const {productId} = await params;

    return (
        <>
        
        <h1 className="m-5 bg-blue-600 text-white h-96 font-bold flex justify-center items-center">Details of Product #{productId}</h1>
        
        </>
    )
}
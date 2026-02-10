
function getRandomInt(number) {
    return Math.floor(Math.random() * number)

    /* 
    
        ... * 1  ==> 0
        ... * 2  ==> 0, 1
        ... * 3  ==> 0, 1, 2
        ... * 4  ==> 0, 1, 2, 3
    
    */
}

export default function productDetailsLayout({ children }) {

  const randomNumber = getRandomInt(2); // 0 OR 1

    if(randomNumber === 1) {
        throw new Error("Error Loading Product!")
    }
    

  return (
    <div>
      <h1 className="text-5xl m-5">Product Info Page</h1>
      {children}
      {/* <h2>Fetaured Products</h2> */}
    </div>
  );
}

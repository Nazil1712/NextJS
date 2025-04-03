export default async function Features({params}) {

    const {featureId} = await params;



    return (
        <>
        <h1>Viewing Documentation for Feature #{featureId}</h1>
        
        </>
    )
}
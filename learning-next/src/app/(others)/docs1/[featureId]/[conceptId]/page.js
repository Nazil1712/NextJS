export default async function Concept({params}) {

    const {conceptId, featureId} = await params;

    return(
        <>
        <h1>Viewing documentation for Feature #{featureId} and Concept #{conceptId}</h1>
        
        </>
    )
}
const SluggishDocsDetails = async ({ params }) => {
  const { slug } = await params;

  console.log(slug);

  if (slug?.length == 1) {
    return (
      <div>
        <h1>Viewing Docs for Feature {slug[0]}</h1>
      </div>
    );
  }
  else if(slug?.length == 2) {
    return (
        <div>
          <h1>Viewing Docs for Feature {slug[0]} and Concept {slug[1]}</h1>
        </div>
      );
  }
  else if (slug?.length == 3) {
    return (  
        <div>
          <h1>Viewing Docs for Feature {slug[0]} and Concept {slug[1]} and example {slug[2]}</h1>
        </div>
      );
  }
  else{
    return (
      <div>
        <h1>Docs default</h1>
      </div>
    );
  }
  return (
    <>
      <h1>Docs Home Page</h1>
    </>
  )
};

export default SluggishDocsDetails;

import Link from "next/link";

export default async function Article({ params, searchParams }) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;

  console.log(lang);

  return (
    <>
      <div className="ml-7 mt-7">
        <h1>News Article Id :- {articleId}</h1>
        <p>
          Reading in Language :-{" "}
          {lang == "en" ? "English" : (lang == "fr" ? "French" : "Spanish")}
        </p>
      </div>

      <div className="mt-7">
        <Link href={`/article/${articleId}?lang=en`} className="mr-7 ml-7">
          Read in English
        </Link>
        <Link href={`/article/${articleId}?lang=fr`} className="mr-7">
          Read in French
        </Link>
        <Link href={`/article/${articleId}?lang=es`} className="mr-7">
          Read in Spanish
        </Link>
      </div>
    </>
  );
}

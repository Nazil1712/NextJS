'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { use } from "react";

export default function Article({ params}) {

  /* 1) This will only work when our component is Async(Server side component) */
  /* const {articleId} = await params;
  const { lang = "en" } = await searchParams; */


  /* 2) Using use() hook of React - For Client Component */
  /* const { articleId } = use(params);
  const {lang = 'en'} = use(searchParams); */


  /* 3) Using useSearchParams() hook of React -  To use this remove searchParams from Props */
  const {articleId} = use(params);
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang');

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

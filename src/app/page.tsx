"use client";
import Content from "@/components/Content";
import { getPosts } from "@/services/content";

export default async function Home() {
  const posts = await fetch(
    "https://cdn.contentful.com/spaces/s00vyqnvc8k4/environments/master/entries?access_token=Gq4PQ1LS3LLm0FgqWltyFX2OPi1iJtge3vdvBPQh_Wc"
  );

  const a = await posts.json();

  console.log(a.items);

  return (
    <main className="flex flex-col items-center justify-between px-24 w-full">
      <h1 className="text-xl sm:text-2xl font-bold text-sky-950 my-8 whitespace-nowrap">
        Update yourself about front-end world
      </h1>
      <div className="m-auto w-full">
        <Content posts={a.items} />
      </div>
    </main>
  );
}

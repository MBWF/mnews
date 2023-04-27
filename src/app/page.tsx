import Content from "@/components/Content";
import { getPosts } from "@/services/content";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex flex-col items-center justify-between px-24 w-full">
      <h1 className="text-xl sm:text-2xl font-bold text-sky-950 my-8 whitespace-nowrap">
        Update yourself about front-end world.
      </h1>
      <div className="m-auto w-full">
        <Content posts={posts} />
      </div>
    </main>
  );
}

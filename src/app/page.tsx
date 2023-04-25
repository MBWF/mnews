import Content from "@/components/Content";
import { getPosts } from "@/services/content";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex flex-col items-center justify-between px-24 w-full">
      <h1 className="text-2xl font-bold text-sky-950 my-8">
        Update yourself about front-end world
      </h1>
      <div className="m-auto">
        <Content posts={posts} />
      </div>
    </main>
  );
}

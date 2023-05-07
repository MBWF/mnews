import { IPost } from "@/services/content";
import Contentful, { EntrySkeletonType } from "contentful";
import Card from "../Card";

type ContentProps = {
  posts: Contentful.Entry<EntrySkeletonType<IPost[]>>[];
};

export default function Content({ posts }: ContentProps) {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-x-16">
      {posts.map((post: any) => (
        <Card
          id={post.sys.id}
          key={post.fields.slug}
          title={post.fields.title}
          description={post.fields.description}
        />
      ))}
    </div>
  );
}

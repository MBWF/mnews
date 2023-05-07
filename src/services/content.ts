import { Document } from "@contentful/rich-text-types";
import Contentful, { createClient } from "contentful";

export type IPost = {
  slug: string;
  title: string;
  description: string;
  thumb: Contentful.Asset;
  content: Document;
};

const client = createClient({
  space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID as string,
  environment: "master",
  accessToken: process.env.NEXT_APP_CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getPosts() {
  const { items } = await client.getEntries<
    Contentful.EntrySkeletonType<IPost[]>
  >({
    content_type: "post",
  });

  return items;
}

export async function getPostById(
  postId: string
): Promise<
  Contentful.Entry<Contentful.EntrySkeletonType<IPost>, undefined, string>
> {
  const data = await client.getEntry<Contentful.EntrySkeletonType<IPost>>(
    postId
  );

  return data;
}

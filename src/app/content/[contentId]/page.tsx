import { getPostById } from "@/services/content";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const renderOptions = {
  renderNode: {
    "embedded-asset-block": (node: any) => {
      const alt = node.data.target.fields.title;
      const url = `https:${node.data.target.fields.file.url}`;
      const width = node.data.target.fields.file.details.image.width;
      const height = node.data.target.fields.file.details.image.height;
      return <Image alt={alt} src={url} width={width} height={height} />;
    },
  },
};

export default async function Content({
  params,
}: {
  params: { contentId: string };
}) {
  const content = await getPostById(params.contentId);

  return (
    <section className="w-full flex flex-wrap justify-center mt-8 ">
      <div className="flex flex-wrap justify-center items-center w-96 sm:w-1/2 flex-col bg-slate-100 shadow-md p-8">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-800 md:text-4xl">
          {content.fields.title}
        </h1>

        <div>
          {documentToReactComponents(content.fields.content, renderOptions)}
        </div>
      </div>
    </section>
  );
}

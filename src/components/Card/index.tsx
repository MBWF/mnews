import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
}

const Card = ({
  id,
  title,
  imageSrc,
  description,
  buttonText = "Read More",
}: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-md w-96 mb-20">
      <Image
        className="w-full h-60 object-cover"
        width={800}
        height={800}
        src={imageSrc}
        alt={title}
      />
      <div className="p-4 w-96">
        <h2 className="text-lg font-semibold overflow-hidden whitespace-nowrap">
          {title}
        </h2>
        <p className="mt-2 line-clamp-4">{description}</p>
        <Link href={`content/${id}`}>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

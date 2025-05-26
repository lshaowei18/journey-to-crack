import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className='flex items-center justify-center'>
      <h3 className="text-lg leading-snug w-3/4">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg w1/4">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}

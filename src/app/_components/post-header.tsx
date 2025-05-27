import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
};

export function PostHeader({ title }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
        </div>
      </div>
    </>
  );
}

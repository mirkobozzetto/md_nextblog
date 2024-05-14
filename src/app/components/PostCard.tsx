import Link from "next/link";

type PostCardProps = {
  post: {
    title: string;
    body: string;
    date: string;
  };
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={"`./posts/${post.slug}`"}>
      <div className="container">
        <h2 className="">{post.title}</h2>
        <p className="">{post.body}</p>
        <p className="">{post.date}</p>
      </div>
    </Link>
  );
};

export default PostCard;

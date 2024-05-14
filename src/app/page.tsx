import getPostMetadata from "@/utils/getPostsMetaData";
import PostCard from "./components/PostCard";

export default function Home() {
  const postMetadata = getPostMetadata("./src/app/posts/");
  console.log(postMetadata);
  return (
    <main>
      <div className="container">
        {postMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}

import getPostMetadata from "@/utils/getPostsMetaData";

export default function Home() {
  const postMetadata = getPostMetadata("./src/app/posts/");
  console.log(postMetadata);
  return (
    <main>
      <p>index page</p>
      {postMetadata.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </main>
  );
}

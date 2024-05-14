import fs from "fs";
import matter from "gray-matter";
// import { title } from "process";

const getPostMetadata = (basePath: string) => {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      date: matterResult.data.date,
      title: matterResult.data.title,
      description: matterResult.data.description,
      content: matterResult.content,
    };
  });
  return posts;
};

export default getPostMetadata;

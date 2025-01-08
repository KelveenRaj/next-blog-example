import { getMarkDownData } from "@utils/markdown";
import Link from "next/link";

const Blog = () => {
  const posts = getMarkDownData("src/posts/");
  return (
    <>
      {posts.map((post, i) => (
        <article key={i}>
          <Link href={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>
          <span>{post.date}</span>
        </article>
      ))}
    </>
  );
};
export default Blog;

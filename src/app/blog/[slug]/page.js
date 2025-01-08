import Markdown from "react-markdown";
import Link from "next/link";
import { getMarkDownData, getMarkDownContent } from "@utils/markdown";

export const generateStaticParams = async () => {
  const posts = getMarkDownData("src/posts/");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const BlogPost = async ({ params }) => {
  const folder = "src/posts/";
  const { slug } = params;
  const post = getMarkDownContent(folder, slug);

  return (
    <>
      <Link href="/blog">Back to homepage</Link>
      <section className="blog-details">
        <Markdown>{post.content}</Markdown>
      </section>
    </>
  );
};

export default BlogPost;

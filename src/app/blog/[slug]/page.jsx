import Markdown from "react-markdown";
import Link from "next/link";
import { getMarkDownData, getMarkDownContent } from "@utils/markdown";

export const generateStaticParams = async () => {
  const posts = getMarkDownData("src/posts/");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
const BlogPost = (props) => {
  const folder = "src/posts/";
  const slug = props.params.slug;
  const post = getMarkDownContent(folder, slug);
  return (
    <>
      <Link href="/">Back to homepage</Link>
      <section className="blog-details">
        <Markdown>{post.content}</Markdown>
      </section>
    </>
  );
};
export default BlogPost;

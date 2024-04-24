import { useBlogs } from "../Hooks";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div className="flex justify-center ">
        <div className="max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name}
              publishedDate={"18-02-2002"}
              content={blog.content}
              title={blog.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

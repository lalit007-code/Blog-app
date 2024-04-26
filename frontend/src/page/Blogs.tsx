import { useBlogs } from "../Hooks";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div>
        <AppBar />
        <div>   
          <BlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div className="flex justify-center ">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonyms"}
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

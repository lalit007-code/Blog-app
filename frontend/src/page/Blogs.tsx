import { useBlogs } from "../Hooks";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogCardSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();
  // console.log(blogs);

  if (loading) {
    return (
      <div>
        <AppBar />
        <div>
          <BlogCardSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div className="flex justify-center items-center  ">
        <div className="grid grid-cols-3 w-full gap-8 mt-10 pl-10 ">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonyms"}
              createdAt={blog.createAt}
              content={blog.content}
              title={blog.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

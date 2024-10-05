import { useNavigate } from "react-router-dom";
import { Blog, useBlogs } from "../Hooks";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogCardSkeleton } from "../components/BlogSkeleton";
import { useEffect } from "react";
import { useFetchBlogs } from "../services/query";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();
  const { data, isLoading } = useFetchBlogs();
  console.log(data);
  // console.log(blogs);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  if (isLoading) {
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
      <div className="flex justify-center w-full   ">
        <div className="md:w-2/3">
          {data.map((blog: Blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonyms"}
              createdAt={blog.createdAt}
              content={blog.content}
              title={blog.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

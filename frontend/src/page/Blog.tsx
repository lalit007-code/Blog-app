import { useParams } from "react-router-dom";
import { useBlog } from "../Hooks";
import { FullBlog } from "../components/FullBlog";
import { AppBar } from "../components/AppBar";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";


export const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });

  if (loading) {
    return (
      <div>
        <AppBar />
        <div>
          <FullBlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

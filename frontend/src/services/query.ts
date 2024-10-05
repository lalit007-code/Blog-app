import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "./api";

export function useFetchBlogs() {
  return useQuery({
    queryKey: ["Blogs"],
    queryFn: getBlogs,
  });
}

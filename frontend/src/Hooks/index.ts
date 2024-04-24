  import axios from "axios";
  import { useEffect, useState } from "react";
  import { BACKEND_URL } from "../config";

  export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            method: "GET",
            headers: {
              "Authorization": localStorage.getItem("token"),
            },
          });
          console.log(response);
          setBlogs(response.data.blogs);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching blogs:", error);
          setLoading(false); // Ensure loading state is set to false even in case of error
        }
      };

      fetchData();
    }, []);

    return {
      blogs,
      loading,
    };
  };

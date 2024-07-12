import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";

// import { Avatar } from "./BlogCard";
// import ArrowButton from "../../components/animata/button/swipe-button";

export const AppBar = () => {
  const navigate = useNavigate();
  async function handleSignout() {
    localStorage.removeItem("token");
    navigate("/signin");
  }

  return (
    <div className="p-4 flex justify-between border-b w-full bg-slate-200">
      <Link to={"/blogs"}>
        <div className="flex flex-col justify-center cursor-pointer">
          Medium
        </div>
      </Link>

      <div className="flex justify-center items-center gap-5 ">
        <Link to={"/publish"}>
          {/* <button
            type="button"
            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Create
          </button> */}
          <Button variant="secondary" className=" hover:bg-slate-400 ">
            <PlusCircleIcon />
          </Button>
          {/* <ArrowButton text="Create" /> */}
        </Link>
        <Button className="" onClick={handleSignout} variant="default">
          Sign Out
        </Button>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";

interface BlogCard {
  authorName: string;
  title: string;
  content: string;

  id: string;
  createdAt: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  createdAt,
}: BlogCard) => {
  // console.log(blogs.data);

  return (
    <div className="hover:shadow-xl  overflow-auto  ">
      <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4  cursor-pointer">
          <div className="flex ">
            <Avatar name={authorName} />

            <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
              {authorName}
            </div>
            <div className=" pl-2 flex justify-center flex-col">
              <Circle />
            </div>
            <div className="pl-2 mt-2 font-thin text-slate-500 text-sm flex justify-center">
              {new Intl.DateTimeFormat("en-US").format(
                typeof createdAt === "string" ? new Date(createdAt) : createdAt
              )}
            </div>
          </div>
          <div className="text-xl font-semibold ">{title}</div>
          <div className="text-md font-thin ">
            {content.slice(0, 100) + "..."}
          </div>
          <div className=" text-slate-500 text-sm font-thin">{`${Math.ceil(
            content.length / 100
          )} minute(s) read`}</div>
        </div>
      </Link>
    </div>
  );
};

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-green-500 "></div>;
}

export function Avatar({ name }: { name: string }) {
  const [firstName, lastName] = name.split(" ");

  return (
    <div>
      <div className="mb-3 relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-red-100 rounded-full dark:bg-gray-600">
        <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">
          {firstName[0]}
          {lastName ? lastName[0] : ""}
        </span>
      </div>
    </div>
  );
}

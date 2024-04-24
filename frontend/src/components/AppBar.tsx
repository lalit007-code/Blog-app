import { Avatar } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className="p-4 flex justify-between border-b w-full">
      <div className="flex flex-col justify-center">Medium</div>
      <div>
        <Avatar name={"Lalit Singh"} />
      </div>
    </div>
  );
};

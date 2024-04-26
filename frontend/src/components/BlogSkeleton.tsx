export const BlogSkeleton = () => {
  return (
    <div className="max-w-xl mx-auto">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="p-4 border-b border-slate-200 pb-4 animate-pulse"
        >
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="font-extralight pl-2 text-sm flex justify-center flex-col bg-gray-200"></div>
            <div className="pl-2 flex justify-center flex-col bg-gray-200">
              <div className="h-1 w-1 rounded-full bg-gray-200"></div>
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center bg-gray-200"></div>
          </div>
          <div className="text-xl font-semibold bg-gray-200 h-6 mt-2"></div>
          <div className="text-md font-thin bg-gray-200 h-4 mt-2"></div>
          <div className="text-slate-500 text-sm font-thin bg-gray-200 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

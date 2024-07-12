

export const BlogCardSkeleton = () => {
  return (
    <div className="hover:shadow-xl">
      <div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div> {/* Avatar placeholder */}
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div> {/* Author name placeholder */}
          </div>
          <div className="pl-2 flex justify-center flex-col">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div> {/* Circle placeholder */}
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center">
            <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div> {/* Created at placeholder */}
          </div>
        </div>
        <div className="text-xl font-semibold mt-4">
          <div className="w-48 h-6 bg-gray-300 rounded animate-pulse"></div> {/* Title placeholder */}
        </div>
        <div className="text-md font-thin mt-2">
          <div className="w-full h-4 bg-gray-300 rounded animate-pulse mb-1"></div> {/* Content line 1 placeholder */}
          <div className="w-full h-4 bg-gray-300 rounded animate-pulse mb-1"></div> {/* Content line 2 placeholder */}
          <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div> {/* Content line 3 placeholder */}
        </div>
        <div className="text-slate-500 text-sm font-thin mt-2">
          <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div> {/* Read time placeholder */}
        </div>
      </div>
    </div>
  );
};

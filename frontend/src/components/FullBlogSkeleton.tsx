export const FullBlogSkeleton = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-10">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="title-skeleton bg-gray-200 h-12 mb-8"></div>
          <div className="post-info-skeleton bg-gray-200 h-6 mb-8"></div>
          <div className="content-skeleton bg-gray-200 h-96 mb-8"></div>
        </div>
        <div className="col-span-4">
          <div className="author-section-skeleton">
            <div className="author-avatar-skeleton bg-gray-200 h-12 w-12 rounded-full mb-4"></div>
            <div className="author-name-skeleton bg-gray-200 h-6 mb-2"></div>
            <div className="author-description-skeleton bg-gray-200 h-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
import React from "react";
import Image from "next/image";
import Link from "next/link";
const RecentBlogs = ({ recentBlogs }) => {
  return (
    <aside
      aria-label="Recent Blogs"
      className="mx-auto mt-12 max-w-screen-xl mb-12"
    >
      <h2 className="mb-8 text-center text-5xl font-bold text-gray-900">
        Recent Blogs
      </h2>
      <div className="mx-auto grid max-w-screen-xl justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
        {recentBlogs.slice(0, 3).map((blog, i) => {
          return (
            <article
              key={i}
              className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900"
            >
              <Image
                src={blog.image}
                alt="Image"
                width={1200}
                height={800}
                className="h-56 w-full object-cover object-center transition-all duration-150 hover:scale-105"
              />
              <div className="flex-auto px-6 py-5">
                <span
                  className="
       bg-blue-600
       rounded
       inline-block
       text-center
       py-1
       px-4
       text-base
       leading-loose
       font-semibold
       text-white
       "
                >
                  {blog.mainTag}
                </span>
                <Link
                  href={{
                    pathname: `/blog/${blog.id}`,
                  }}
                >
                  <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                    {blog.title}
                  </h3>
                </Link>
                <p className="mb-4 text-base font-light">{blog.description}</p>
                <Link
                  href={{
                    pathname: `/blog/${blog.id}`,
                  }}
                  className="inline-block cursor-pointer select-none rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"
                >
                  Read Now
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default RecentBlogs;

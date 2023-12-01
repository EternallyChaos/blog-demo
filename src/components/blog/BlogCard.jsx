import React from "react";
import Image from "next/image";
import AuthorIcon from "../icons/AuthorIcon";
import HeartIcon from "../icons/HeartIcon";
import Link from "next/link";
import { formattedDate } from "@/libs";

const BlogCard = ({ blog, i }) => {
  const date = formattedDate(blog);
  return (
    <div>
      <div className="w-full px-4">
        <div className="mx-auto mb-10 flex flex-col lg:flex-row gap-3 lg:gap-8">
          <div className="flex-1 rounded overflow-hidden mb-2">
            <Link
              href={{
                pathname: `/blog/${blog.id}`,
              }}
            >
              <Image
                src={blog.image}
                alt="img"
                width={800}
                height={600}
                className="object-cover object-center w-full h-auto transition duration-150 hover:scale-105"
                priority={i === 0 ? true : false}
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col justify-between xl:py-8">
            <div>
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
       mb-2
       xl:mb-5
       "
              >
                {blog.mainTag}
              </span>
              <h3>
                <Link
                  href={{
                    pathname: `/blog/${blog.id}`,
                  }}
                  className="
          font-semibold
          text-xl
          sm:text-2xl
          lg:text-xl
          xl:text-2xl
          mb-3
          inline-block
          text-dark
          hover:text-primary
          "
                >
                  {blog.title}
                </Link>
              </h3>
              <div className="flex gap-2 mb-2">
                <AuthorIcon />
                <p>{blog.author}</p> <span className="ml-2">Date: {date}</span>
              </div>
              <p className="text-base text-gray-600">{blog.description}</p>
            </div>
            <div className="flex justify-between items-center mt-3 xl:mt-3 mb-2 xl:mb-0">
              <div className="flex gap-4">
                <div>{blog.views} views</div>
                <div>{blog.comment} comments</div>
              </div>
              <div>
                <HeartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

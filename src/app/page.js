"use client";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import BlogCard from "@/components/blog/BlogCard";
import { Blogs } from "@/data/Blogs";
import FilterButton from "@/components/common/FilterButton";

const filterCategory = ["All", "Beauty", "Fashion", "Lifestyle"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlogs, setSelectedBlogs] = useState([]);

  useEffect(() => {
    const filteredBlogs = () => {
      if (selectedCategory === "All") {
        return Blogs;
      }
      let blog = Blogs.filter((blog) => {
        return selectedCategory.toLowerCase() === blog.mainTag.toLowerCase();
      });

      return blog;
    };
    setSelectedBlogs(filteredBlogs());
  }, [selectedCategory]);

  const blogFilter = (blogTag) => {
    setSelectedCategory(blogTag);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-8">
      <MaxWidthWrapper>
        <div className="pt-8">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  More Blogs
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <ul className="flex gap-4">
            {filterCategory.map((category, i) => {
              return (
                <li key={i}>
                  <FilterButton
                    selectedCategory={selectedCategory}
                    blogFilter={blogFilter}
                    text={category}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <section className="pt-8 pb-10">
            <div className="container">
              <div className="flex flex-col -mx-4">
                {selectedBlogs.map((blog, i) => {
                  return (
                    <div key={i}>
                      <BlogCard blog={blog} i={i} />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

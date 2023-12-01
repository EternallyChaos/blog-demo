import { compareDesc, parseISO, format } from "date-fns";

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedDate), parseISO(b.publishedDate))
    );
};

export const formattedDate = (blog) => {
  return format(new Date(blog.publishedDate), "dd MMMM yyyy");
};

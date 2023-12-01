import React from "react";

const FilterButton = ({ selectedCategory, blogFilter, text }) => {
  return (
    <button
      onClick={() => {
        blogFilter(text);
      }}
      className={`${
        selectedCategory === text ? "bg-blue-600 text-white" : "text-black"
      } px-3 py-1.5 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white`}
    >
      {text}
    </button>
  );
};

export default FilterButton;

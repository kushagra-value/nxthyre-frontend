import React from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../data/jobsData";
import * as LucideIcons from "lucide-react";

const CategoryTags = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(
      `/${category.name.toLowerCase()}?k=${category.name.toLowerCase()}`
    );
  };

  // Function to get the icon component by name
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="h-5 w-5" /> : null;
  };

  // Group categories into rows of 4, then 2, alternately
  const groupCategories = (categories) => {
    const rows = [];
    let index = 0;
    let takeFour = true;
    while (index < categories.length) {
      const size = takeFour ? 4 : 3;
      const row = categories.slice(index, index + size);
      rows.push(row);
      index += size;
      takeFour = !takeFour;
    }
    return rows;
  };

  const rows = groupCategories(categoriesData);

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Browse Jobs by Category
        </h2>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-4 mb-4"
          >
            {row.map((category) => (
              <div
                key={category.id}
                className="w-48 transform transition-all duration-300 hover:-translate-y-2"
              >
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="w-full h-16 bg-white rounded-lg shadow-md hover:shadow-lg p-4 flex items-center justify-start transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-200">
                    <span className="text-purple-600">
                      {getIcon(category.icon)}
                    </span>
                  </div>
                  <span className="ml-3 text-gray-800 font-medium group-hover:text-purple-600 transition-colors duration-200">
                    {category.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTags;

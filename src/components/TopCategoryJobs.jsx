import React from "react";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { jobsData } from "../data/jobsData";
import { Link } from "react-router-dom";

const TopCategoryJobs = ({ category, title, limit = 5 }) => {
  // Filter jobs by category and limit
  const filteredJobs = jobsData
    .filter((job) => job.category.includes(category))
    .slice(0, limit);

  return (
    <div
      className="py-10 font-medium"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          {title}
        </h2>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              className={`${
                index !== filteredJobs.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <div className="p-5 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-start">
                      <div className="w-14 h-14 mt-3 rounded-md overflow-hidden mr-8 bg-gray-100 flex-shrink-0">
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="font-medium text-lg text-gray-900 mb-1">
                          <Link
                            to={`/jobs/${job.id}`}
                            className="hover:text-purple-600 transition-colors duration-200"
                          >
                            {job.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 text-sm mb-2">
                          {job.company}
                        </p>

                        <div className="flex flex-wrap items-center text-sm text-gray-500">
                          <div className="flex items-center mr-4 mb-1">
                            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                            {job.location}
                          </div>

                          <div className="flex items-center mr-4 mb-1">
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <Link
                      to={`/jobs/${job.id}`}
                      className="inline-flex items-center justify-center bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-md transition-colors duration-200"
                    >
                      Apply <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to={`/${category.toLowerCase()}?k=${category.toLowerCase()}`}
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
          >
            View all {category} jobs <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCategoryJobs;

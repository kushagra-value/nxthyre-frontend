import React, { useState } from "react";
import { Search, X, ChevronDown, ChevronUp } from "lucide-react";

const JobListFilters = ({ onFilterChange }) => {
  const [expandedFilters, setExpandedFilters] = useState({
    department: true,
    workMode: true,
    experience: true,
    location: false,
    salary: false,
    companyType: false,
  });

  const [filters, setFilters] = useState({
    departments: [],
    workModes: [],
    experience: [0, 15], // Min and max experience
    locations: [],
    salary: [0, 50], // Min and max salary in LPA
    companyTypes: [],
  });

  const [searchTerm, setSearchTerm] = useState("");

  const toggleFilter = (filterName) => {
    setExpandedFilters({
      ...expandedFilters,
      [filterName]: !expandedFilters[filterName],
    });
  };

  const handleDepartmentChange = (department) => {
    const updatedDepartments = filters.departments.includes(department)
      ? filters.departments.filter((d) => d !== department)
      : [...filters.departments, department];

    const updatedFilters = {
      ...filters,
      departments: updatedDepartments,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleWorkModeChange = (workMode) => {
    const updatedWorkModes = filters.workModes.includes(workMode)
      ? filters.workModes.filter((w) => w !== workMode)
      : [...filters.workModes, workMode];

    const updatedFilters = {
      ...filters,
      workModes: updatedWorkModes,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleExperienceChange = (value, index) => {
    const updatedExperience = [...filters.experience];
    updatedExperience[index] = parseInt(value);

    const updatedFilters = {
      ...filters,
      experience: updatedExperience,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      departments: [],
      workModes: [],
      experience: [0, 15],
      locations: [],
      salary: [0, 50],
      companyTypes: [],
    };

    setFilters(clearedFilters);
    setSearchTerm("");
    onFilterChange(clearedFilters);
  };

  const activeFilterCount =
    filters.departments.length +
    filters.workModes.length +
    (filters.experience[0] > 0 || filters.experience[1] < 15 ? 1 : 0) +
    filters.locations.length +
    (filters.salary[0] > 0 || filters.salary[1] < 50 ? 1 : 0) +
    filters.companyTypes.length;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-800">All Filters</h3>

          {activeFilterCount > 0 && (
            <div className="flex items-center">
              <span className="bg-purple-100 text-purple-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full">
                {activeFilterCount} applied
              </span>

              <button
                onClick={handleClearFilters}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        <div className="mt-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>

          <input
            type="text"
            placeholder="Search filters..."
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Work Mode Filter */}
      <div className="border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full p-4 text-left"
          onClick={() => toggleFilter("workMode")}
        >
          <span className="font-bold text-gray-800">Work Mode</span>
          {expandedFilters.workMode ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>

        {expandedFilters.workMode && (
          <div className="px-4 pb-4">
            {["Remote", "Hybrid", "On-site"].map((workMode) => (
              <div key={workMode} className="flex items-center mb-2">
                <input
                  id={`workMode-${workMode}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-purple-500"
                  checked={filters.workModes.includes(workMode)}
                  onChange={() => handleWorkModeChange(workMode)}
                />
                <label
                  htmlFor={`workMode-${workMode}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {workMode} <span className="text-gray-500">(28)</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Department Filter */}
      <div className="border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full p-4 text-left"
          onClick={() => toggleFilter("department")}
        >
          <span className="font-bold text-gray-800">Department</span>
          {expandedFilters.department ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>

        {expandedFilters.department && (
          <div className="px-4 pb-4">
            {[
              "Engineering",
              "IT",
              "Sales",
              "Marketing",
              "Design",
              "Finance",
              "HR",
            ].map((department) => (
              <div key={department} className="flex items-center mb-2">
                <input
                  id={`department-${department}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-purple-500"
                  checked={filters.departments.includes(department)}
                  onChange={() => handleDepartmentChange(department)}
                />
                <label
                  htmlFor={`department-${department}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {department} <span className="text-gray-500">(42)</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Location Filter */}
      <div className="border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full p-4 text-left"
          onClick={() => toggleFilter("location")}
        >
          <span className="font-bold text-gray-800">Location</span>
          {expandedFilters.location ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>

        {expandedFilters.location && (
          <div className="px-4 pb-4">
            <div className="mb-2 relative">
              <input
                type="text"
                placeholder="Search location..."
                className="w-full py-2 pl-3 pr-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            {[
              "Bengaluru",
              "Mumbai",
              "Delhi",
              "Hyderabad",
              "Chennai",
              "Pune",
              "Remote",
            ].map((location) => (
              <div key={location} className="flex items-center mb-2">
                <input
                  id={`location-${location}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label
                  htmlFor={`location-${location}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {location} <span className="text-gray-500">(19)</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Experience Filter */}
      <div className="border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full p-4 text-left"
          onClick={() => toggleFilter("experience")}
        >
          <span className="font-bold text-gray-800">Experience</span>
          {expandedFilters.experience ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>

        {expandedFilters.experience && (
          <div className="px-4 pb-4">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">
                  {filters.experience[0]} years
                </span>
                <span className="text-sm text-gray-600">
                  {filters.experience[1] === 15
                    ? "15+ years"
                    : `${filters.experience[1]} years`}
                </span>
              </div>

              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="1"
                  value={filters.experience[0]}
                  onChange={(e) => handleExperienceChange(e.target.value, 0)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />

                <input
                  type="range"
                  min="0"
                  max="15"
                  step="1"
                  value={filters.experience[1]}
                  onChange={(e) => handleExperienceChange(e.target.value, 1)}
                  className="w-full h-2 bg-transparent absolute top-0 appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {["0-1", "1-3", "3-5", "5-10", "10+"].map((range) => (
                <button
                  key={range}
                  className="py-1 px-2 text-sm border border-gray-300 rounded-md hover:border-purple-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
                >
                  {range} years
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListFilters;

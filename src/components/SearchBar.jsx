import React, { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    // Build query params
    const params = new URLSearchParams();

    if (searchInput) params.append("k", searchInput);
    if (location) params.append("l", location);
    if (experience) params.append("experience", experience);

    // Create URL path based on search parameters
    let path = "/jobs";

    // If both search and location are provided, create a seo-friendly URL
    if (searchInput && location) {
      path = `/${searchInput.toLowerCase()}-jobs-in-${location.toLowerCase()}`;
    } else if (searchInput) {
      path = `/${searchInput.toLowerCase()}-jobs`;
    }

    // Navigate to search results
    navigate(`${path}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-4xl mx-auto bg-white rounded-full shadow-lg p-2 md:p-3"
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-3">
          <div className="flex items-center">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter skills / designations / companies"
              className="w-full outline-none text-gray-700 text-lg"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-3">
          <div className="flex items-center">
            <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
            <select
              className={`w-full outline-none text-lg ${
                experience === "" ? "text-gray-400" : "text-gray-700"
              }`}
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">Select experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
        </div>

        <div className="flex-1 p-3">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter location"
              className="w-full outline-none text-gray-700 text-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="p-2">
          <button
            type="submit"
            className="w-full h-full bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:shadow-lg transition-all duration-200"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;

import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import JobListFilters from "../components/JobListFilters";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";
import { jobsData } from "../data/jobsData";

const JobsPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  // Get search parameters
  const searchQuery = searchParams.get("k");
  const location = searchParams.get("l");
  const experience = searchParams.get("experience");

  const handleFilterChange = (filters) => {
    // Apply filters to jobs
    let filtered = [...jobsData];

    if (filters.departments.length > 0) {
      filtered = filtered.filter((job) =>
        filters.departments.includes(job.department)
      );
    }

    if (filters.workModes.length > 0) {
      filtered = filtered.filter((job) =>
        filters.workModes.includes(job.workMode)
      );
    }

    if (filters.experience[0] > 0 || filters.experience[1] < 15) {
      filtered = filtered.filter((job) => {
        const jobExp = parseInt(job.experience.split("-")[0]);
        return (
          jobExp >= filters.experience[0] && jobExp <= filters.experience[1]
        );
      });
    }

    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-10 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Sidebar - Filters */}
            <div className="md:w-1/3">
              <JobListFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Main Content - Job Listings */}
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {searchQuery ? `${searchQuery} Jobs` : "All Jobs"}
                  {location && ` in ${location}`}
                </h1>
                <p className="text-gray-600">
                  Showing {filteredJobs.length} jobs
                  {experience && ` for ${experience} years experience`}
                </p>
              </div>

              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobsPage;

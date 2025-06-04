import { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Building2, Star } from 'lucide-react';
import { Job } from '@/types/job';
import { FilterSection } from './FilterSection';
import { SimilarJobs } from './SImilarJobs';
import JobListFilters from './JobListFilters';
import { jobsData } from "../data/jobsData";
import { useSearchParams } from 'react-router-dom';
import JobCard from './JobCard';

interface JobDetailsProps {
  job: Job;
}

export const JobDetails = ({ job }: JobDetailsProps) => {
  const [isApplying, setIsApplying] = useState(false);
  const [searchParams] = useSearchParams();
  
  
    
  const handleApply = () => {
    setIsApplying(true);
    // In a real app, you would handle the application process here
    setTimeout(() => {
      setIsApplying(false);
      // Show success message or redirect
    }, 1500);
  };
 

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-4 space-y-4">
          <SimilarJobs currentJobId={job.id} />
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-8 space-y-6">
          {/* Job Header Card */}
          
          <JobCard key={job.id} job={job} />
          {/* Job Details */}
          <div className="p-6 space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <button key={skill} variant="secondary">
                    {skill}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Key Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Must Have</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.mustHaveSkills.map((skill) => (
                      <button key={skill} variant="default">
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Good to Have</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.goodToHaveSkills.map((skill) => (
                      <button key={skill} variant="secondary">
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Benefits & Perks</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">About Company</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Building2 className="w-12 h-12 text-gray-400" />
                  <div>
                    <h3 className="font-medium">{job.companyInfo.name}</h3>
                    <p className="text-gray-600">{job.companyInfo.type} • {job.companyInfo.industry}</p>
                  </div>
                </div>
                <p className="text-gray-600">{job.companyInfo.description}</p>
                <p className="text-gray-600">{job.companyInfo.address}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-4">
                {job.reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{review.name}</span>
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.review}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* left Sidebar - Similar Jobs */}
        
      </div>
    </div>
  );
};
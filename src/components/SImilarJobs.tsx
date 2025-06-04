import { Job } from '@/types/job';
import  JobCard  from './JobCard2';
import { jobsData } from '@/data/jobsData';

interface SimilarJobsProps {
  currentJobId: string;
  limit?: number;
}

export const SimilarJobs = ({ currentJobId, limit = 4 }: SimilarJobsProps) => {
  // In a real app, you would fetch similar jobs based on matching criteria
  const similarJobs = jobsData
    .filter(job => job.id !== currentJobId)
    .slice(0, limit);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Similar Jobs</h2>
      <div className="space-y-4">
        {similarJobs.map((job) => (
          <JobCard key={job.id} job={job} compact />
        ))}
      </div>
    </div>
  );
};
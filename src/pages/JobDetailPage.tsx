import { useParams, useNavigate } from 'react-router-dom';
import { JobDetails } from '@/components/JobDetails';
import { jobsData } from '@/data/jobsData';
import { ArrowLeft } from 'lucide-react';

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const job = jobsData.find(j => j.id === id);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
        <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/')}>
          Go Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <button 
          variant="ghost" 
          className="flex items-center gap-2"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </button>
      </div>
      <JobDetails job={job} />
    </div>
  );
};

export default JobDetailPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Bookmark, Star } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-md overflow-hidden mr-4 bg-gray-100 flex-shrink-0">
            <img 
              src={job.companyLogo} 
              alt={job.company} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg text-gray-900 mb-1">
                  <Link to={`/jobs/${job.id}`} className="hover:text-purple-600 transition-colors duration-200">
                    {job.title}
                  </Link>
                </h3>
                
                <div className="flex items-center mb-3">
                  <span className="text-gray-600 mr-2">{job.company}</span>
                  
                  <div className="flex items-center text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="text-xs ml-1">{job.rating}</span>
                  </div>
                </div>
              </div>
              
              <button 
                className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                aria-label="Save job"
              >
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex flex-wrap mb-3">
              <div className="flex items-center mr-4 mb-1.5">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{job.location}</span>
              </div>
              
              <div className="flex items-center mr-4 mb-1.5">
                <Clock className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{job.experience}</span>
              </div>
              
              <div className="flex items-center mb-1.5">
                <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{job.salary}</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {job.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.slice(0, 4).map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
              
              {job.skills.length > 4 && (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
                  +{job.skills.length - 4} more
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xs text-gray-500">{job.postedTime}</span>
                
                {job.badges.length > 0 && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                    {job.badges[0]}
                  </span>
                )}
                
                {job.isUrgent && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                    Urgent
                  </span>
                )}
              </div>
              
              <Link 
                to={`/jobs/${job.id}`}
                className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors duration-200"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
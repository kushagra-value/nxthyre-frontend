export interface CompanyInfo {
  name: string;
  description: string;
  address: string;
  type: string;
  industry: string;
}

export interface Review {
  name: string;
  rating: number;
  review: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  experience: string;
  location: string;
  jobType: string;
  workMode: string;
  salary: string;
  department: string;
  postedDate: string;
  applicants: number;
  totalOpenings: number;
  description: string;
  skills: string[];
  requirements: string[];
  responsibilities: string[];
  education: string;
  mustHaveSkills: string[];
  goodToHaveSkills: string[];
  benefits: string[];
  companyInfo: CompanyInfo;
  reviews: Review[];
}
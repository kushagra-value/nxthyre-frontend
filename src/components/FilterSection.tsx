import { ChevronDown } from 'lucide-react';

interface FilterSectionProps {
  title: string;
}

export const FilterSection = ({ title }: FilterSectionProps) => (
  <div className="border-b pb-4">
    <div className="flex justify-between items-center">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <ChevronDown className="w-4 h-4 text-gray-500" />
    </div>
  </div>
);
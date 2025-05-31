import { useEffect, useState } from 'react';
import { STUDENT_COMPANIES } from '../constants/companies';

export const useGetCompanies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  // Simulating fetching students data
  async function fetchCompanies() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    setIsLoading(false);

    setCompanies(STUDENT_COMPANIES);
  }

  useEffect(() => {
    fetchCompanies();

    return () => {};
  }, []);

  return {
    companies,
    isLoading,
  };
};

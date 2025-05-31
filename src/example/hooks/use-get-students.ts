import { useEffect, useState } from 'react';
import type { Student } from '../interfaces/student';

export const useGetStudents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);

  // Simulating fetching students data
  async function fetchMockStudents() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    setIsLoading(false);
    const mockStudents: Student[] = [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 17 },
      { name: 'Charlie', age: 22 },
      { name: 'David', age: 16 },
      { name: 'Sandra', age: 19 },
    ];
    setStudents(mockStudents);
  }

  useEffect(() => {
    fetchMockStudents();

    return () => {};
  }, []);

  return {
    students,
    isLoading,
  };
};

import { createContext, useContext } from 'react';
import { useGetCompanies } from '../hooks/use-get-companies';

interface UniversityContextProps {
  companies: { id: number; name: string }[];
  isCompaniesLoading: boolean;
}
export const universityContext = createContext<UniversityContextProps>({
  companies: [],
  isCompaniesLoading: false,
});

export const UniversityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { companies, isLoading: isCompaniesLoading } = useGetCompanies();

  console.log('companies', companies);
  console.log('isCompaniesLoading', isCompaniesLoading);

  return (
    <universityContext.Provider value={{ companies, isCompaniesLoading }}>
      {children}
    </universityContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUniversityContext = () => {
  const context = useContext(universityContext);

  if (!context) {
    throw new Error(
      'useUniversityContext must be used within a UniversityProvider'
    );
  }
  return context;
};

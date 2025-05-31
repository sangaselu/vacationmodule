import { UniversityProvider } from '../contexts/university.context';
import { useGetStudents } from '../hooks/use-get-students';
import { RowUniversity } from './row-university';
import { SelectCompanies } from './select-companies';

export const University = () => {
  const { students, isLoading } = useGetStudents();
  // const { companies, isLoading: isCompaniesLoading } = useGetCompanies();

  return (
    <div className="p-6">
      <UniversityProvider>
        <SelectCompanies />
        <h1 className="text-3xl font-bold text-red-500 mb-6">University</h1>

        {isLoading && (
          <div className="animate-bounce flex items-center justify-center h-64">
            <p>Cargando</p>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 font-medium text-gray-700">
                  Name
                </th>
                <th className="text-left px-6 py-3 font-medium text-gray-700">
                  Age
                </th>
                <th className="text-left px-6 py-3 font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <RowUniversity key={index} student={student} />
              ))}
            </tbody>
          </table>
        </div>
      </UniversityProvider>
    </div>
  );
};

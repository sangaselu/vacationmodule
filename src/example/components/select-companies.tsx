import React from 'react';
import { useUniversityContext } from '../contexts/university.context';

export const SelectCompanies = () => {
  const { companies, isCompaniesLoading } = useUniversityContext();
  return (
    <select className="mb-4 p-2 border border-gray-300 rounded">
      <option value="all" disabled={isCompaniesLoading}>
        Companies
      </option>
      {isCompaniesLoading ? (
        <option value="" disabled>
          Cargando empresas...
        </option>
      ) : (
        companies.map((company) => (
          <option key={company.id} value={company.name}>
            {company.name}
          </option>
        ))
      )}
    </select>
  );
};

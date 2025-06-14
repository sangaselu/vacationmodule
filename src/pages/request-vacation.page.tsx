import { useEffect, useState } from 'react';
import { RequestVacationFormComponent } from '../features/vacations-management/components/request-vacation.form.component';
import { VacationsManagementService } from '../features/vacations-management/services/vacations-management.service';

export const RequestVacation = () => {
  const [currentVacations, setCurrentVacations] = useState([]);

  useEffect(() => {
    const localStorageVacations =
      VacationsManagementService.listVacationRequests();
    setCurrentVacations(localStorageVacations);

    return () => {};
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <RequestVacationFormComponent />
      <div>
        <pre>{JSON.stringify(currentVacations, null, 2)}</pre>
      </div>
    </div>
  );
};

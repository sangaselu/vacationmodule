import type { RequestVacationForm } from '../interfaces/request-vacation-form.interface';

// Local Storage
export class VacationsManagementService {
  static createVacationRequest(request: RequestVacationForm) {
    const currentVacations = JSON.parse(
      localStorage.getItem('vacationRequests') || '[]'
    );
    currentVacations.push({
      ...request,
      status: 'pending', // Estado inicial de la solicitud
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('vacationRequests', JSON.stringify(currentVacations)); // Reemplaza
  }

  static listVacationRequests() {
    const vacationRequests = JSON.parse(
      localStorage.getItem('vacationRequests') || '[]'
    );
    return vacationRequests;
  }
}

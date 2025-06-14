import type { RequestVacationStatus } from '../types/request-vacation-status';

export interface RequestVacationRow {
  name: string;
  startDate: string;
  lastDate: string;
  status: RequestVacationStatus;
}

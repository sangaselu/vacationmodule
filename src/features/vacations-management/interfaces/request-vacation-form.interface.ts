import type { Dayjs } from 'dayjs';

export interface RequestVacationForm {
  name: string;
  startDate: Dayjs;
  lastDate: Dayjs;
}

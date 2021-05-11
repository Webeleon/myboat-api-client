import { Recurrency } from './Recurrency';

export interface MaintenanceTask {
  boatUuid: string;
  recurrency: Recurrency;
  title: string;
  description?: string;
  dueDate: Date;
}

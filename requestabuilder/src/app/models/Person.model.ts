import { Job } from './Job.model';

export interface Person {
    personId?: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    username?: string;
    password: string;
    createdJobs: Job[];
    savedJobs: Job[];
    completedJobs: Job[];
}
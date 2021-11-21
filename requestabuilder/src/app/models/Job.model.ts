export interface Job {
    jobId: string; 
    title: string;
    price: string;
    difficulty: string;
    jobDescription: string;
    completed?: boolean;
    created?: boolean;
    saved?: boolean;
}
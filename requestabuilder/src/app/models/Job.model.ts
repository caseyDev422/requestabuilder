export interface Job {
    jobId: string; 
    title: string;
    price: string;
    difficulty: string;
    description: string;
    completed?: boolean;
    created?: boolean;
    createdBy: string;
    saved?: boolean;
    claimedJob?: boolean;
}
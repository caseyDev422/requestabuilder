export interface Job {
    _id: string; 
    title: string;
    price: string;
    difficulty: string;
    description: string;
    completed?: boolean;
    created?: boolean;
    createdBy: string;
    saved?: boolean;
}
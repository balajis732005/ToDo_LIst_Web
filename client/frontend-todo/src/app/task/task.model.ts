export interface Task {
    id?:number; // It is Generated by DataBase so it is optinal
    description:string;
    completed:boolean;
}
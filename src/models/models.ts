export type PersonType ={
    personID:number,
    firstName:string,
    LastName:string,
    age:number,
    cityID:number
}

export type TasksType = {
     taskId?: number,
     taskTitle:string

};

export enum Colors {
  Red = "Red",
  Green= "Green",
  Blue = "Blue"
};



export type ProductsType = {
    id: string;
    name: string;
    description: string;
    material: string;
    price: string;
    quantity: number;
    color: any;
}
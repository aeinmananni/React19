import { Colors, ProductsType, TasksType } from "../models/models"
import {faker} from "@faker-js/faker";

export const  column :Record<keyof Omit<TasksType,"taskId">,string> = {
    taskTitle:"عنوان تسک"
};

export const PRODUCTS:ProductsType[] = new Array(1500).fill(null).map(() => {
    return {
        id:faker.database.mongodbObjectId(),
        name:faker.commerce.productName(),
        description:faker.commerce.productDescription(),
        material:faker.commerce.productMaterial(),
        price: faker.commerce.price(),
        quantity:faker.number.int({min:0,max:100}),
        color:faker.helpers.arrayElement([Colors.Red,Colors.Green,Colors.Blue])
    }
})
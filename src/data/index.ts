import {faker} from "@faker-js/faker";

import { Colors,ProductsType } from "../models"


const products: ProductsType[]= new Array(1500).fill(null).map(() =>({
 id:faker.database.mongodbObjectId(),
 name:faker.commerce.productName(),
 description:faker.commerce.productDescription(),
 material:faker.commerce.productMaterial(),
 price:faker.commerce.price(),
 quantity:faker.number.int({min:0,max:100}),
 color:faker.helpers.arrayElement(Object.values(Colors))
}))

export default products;
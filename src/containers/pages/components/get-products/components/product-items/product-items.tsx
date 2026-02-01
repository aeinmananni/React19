import { ProductsType } from "../../../../../../models/models";




type ProductItemsProps ={
    product:ProductsType
}

export default function ProductItems({product}:ProductItemsProps){
    
    return (
          <fieldset className="border grid grid-cols-3  gap-4 p-3 rounded-md border-slate-700">
            <legend className="bg-orange-500 text-white px-2">Product Number {product.id}</legend>
              {Object.keys(product).map((it) => (
                 <div className="flex flex-col">
                 <span>{it} :</span>
                  <span className="ml-4">{product[it as keyof ProductsType]}</span>
                 </div>
              ))}
           </fieldset>
    )
}
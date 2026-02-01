
import { PRODUCTS } from "../../../../data";
import { ProductItems } from "./components";









export default function GetProducts(){
    return(
          <div className="grid grid-cols-1 gap-8">
              {PRODUCTS.map((it) => (
                <ProductItems key={it.id} product={it}/>
              ))}
          </div>
    )
}
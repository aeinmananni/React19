import { useState, useTransition } from "react";
import { Button } from "../../components";
import { About, Contact, GetProducts } from "./components";
import { sleep } from "../../utils";




const PAGES : {id:number;compoent:() => React.ReactNode,title:string}[] = [
     {
        id:1,
        compoent:GetProducts,
        title:"products"
     },
     {
        id:2,
        compoent:About,
        title:"about"
     },
     {
        id:3,
        compoent:Contact,
        title:"contact"
     }
]


export default function Pages(){
 const [selectedTab,setSelectedTab] = useState<number>(1);
 const [isPending,startTransition] = useTransition();
sleep(1);

   const handelSwitchTab = (id:number) =>{
    startTransition(() => {
      setSelectedTab(id)
    })
   }
   const tabs = PAGES.map((it) =>(

      <Button className="bg-sky-950 text-white p-2 rounded-lg" key={it.id} onClick={() => handelSwitchTab(it.id)}>{it.title}</Button>
   ))

   const page = PAGES.map((it) => {
                const Component = it.compoent
                return(
                   <>
                   {it.id === selectedTab && (

                   <Component key={it.id}/>
                   )}
                   </>
                )
               })
    return (
             <div className="w-full h-full flex flex-col gap-3">
             <header className="w-full flex justify-center items-center gap-2">
               {tabs}
             </header>
             <main className="w-full h-full overflow-y-auto border-4 border-yellow-500 p-8 rounded-xl">
                {isPending ? "...loading" :page}
             </main>
             </div>
    )
}

import {  useActionState ,useOptimistic } from "react";
import { Button, Input } from "../../components";
import { updateNameInDB } from "../../utils";



// FormEvent<HTMLFormElement>





export default function UseOptimistic(){
    const version:number = 3;
    // prevState : برای دسترسی به وضعیت قبلی کامپوننت
        const handelFormAction = async (prevState:any,formData:FormData) =>{
            setOptimisticName(String(formData.get("firstName") || ""))
        try{
            const newName = await updateNameInDB(String(formData?.get("firstName")),version);
            return newName
        }catch(err:any){
            console.log("Error : ", err.message)
            return {...prevState,err}
        }

    }

    const [name,actionFunction] = useActionState(handelFormAction,String(JSON.parse(localStorage.getItem(`firstName:${version}`) ?? '"Anonymous"')));
    // میتونیم با استفاده از این هوک تغییرات موقتی رو اعمال کنیم
    // و اگر خطایی اتفاق افتاد میتونیم اونارو برگردونیم
    const [optimisticName,setOptimisticName] = useOptimistic<string>(name)

 


    return(
        <div className="w-full h-full flex flex-col">

        <form action={actionFunction} className="flex flex-col gap-3">

            <Input name="firstName" placeholder="Please Inter Your Name..." required/>
            <Button>Submit</Button>
        </form>
       { <h1 className="w-full text-center text-2xl">My Name is <span className="text-blue-500">{optimisticName}</span></h1>} 
        </div>
    )
}
import {  useActionState } from "react";
import { Button, Input } from "../../components";
import { updateNameInDB } from "../../utils";



// FormEvent<HTMLFormElement>

export default function UseActionState(){
    const version:number = 2;
    // prevState : برای دسترسی به وضعیت قبلی کامپوننت
        const handelFormAction = async (prevState:any,formData:FormData) =>{
        try{
            const newName = await updateNameInDB(String(formData?.get("firstName")),version);
            return newName
        }catch(err:any){
            console.log("Error : ", err.message)
            return {...prevState,err}
        }

    }
    const [name,actionFunction,isPending] = useActionState(handelFormAction,String(JSON.parse(localStorage.getItem(`firstName:${version}`) ?? '"Anonymous"')));

 


    return(
        <div className="w-full h-full flex flex-col">

        <form action={actionFunction} className="flex flex-col gap-3">

            <Input name="firstName" placeholder="Please Inter Your Name..." required/>
            <Button className="bg-blue-500 p-2 rounded-lg w-1/6">Submit</Button>
        </form>

       {isPending ? "Loading..." : <h1 className="w-full text-center text-2xl">My Name is <span className="text-blue-500">{name}</span></h1>} 
        </div>
    )
}
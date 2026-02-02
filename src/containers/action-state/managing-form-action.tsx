import {  useState } from "react";
import { Button, Input } from "../../components";
import { updateNameInDB } from "../../utils";



// FormEvent<HTMLFormElement>

export default function ActionState(){
const version:number= 1;
    const [name,setName] = useState<string>(
        () => String(JSON.parse(localStorage.getItem(`firstName:${version}`) ?? '"Anonymous"'))
    );

 

    const handelFormAction = async (formData:FormData) =>{
        try{
            const newName = await updateNameInDB(String(formData?.get("firstName")),version);
            setName(newName);
        }catch(err:any){
            console.log("Error : ", err.message)
        }

    }
    return(
        <div className="w-full h-full flex flex-col">

        <form action={handelFormAction} className="flex flex-col gap-3">

            <Input name="firstName" placeholder="Please Inter Your Name..." required/>
            <Button className="bg-blue-500 p-2 rounded-lg w-1/6">Submit</Button>
        </form>

        <h1 className="w-full text-center text-2xl">My Name is <span className="text-blue-500">{name}</span></h1>
        </div>
    )
}
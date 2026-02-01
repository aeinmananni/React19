


export const sleep = (ms:number) =>{
    const wakeUpTime = Date.now() + ms;
    while(Date.now() < wakeUpTime);
}


export const updateNameInDB = async (newName:string) =>{
  await new Promise((resolve) => setTimeout(resolve,1500));

  if(newName.toLocaleLowerCase().includes("error")){
    throw new Error("Faild to update name");
  }

  localStorage.setItem('name' , JSON.stringify(newName));

  return newName;
}
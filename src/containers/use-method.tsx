import { PersonType } from "../models/models";

const fetchData = async (): Promise<PersonType[]> => {
  const response = await fetch("/api/personsRquest");
  return response.json();
};
const UseMethod = async () => {
  const response = await fetchData();
  return (
    <div>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default UseMethod;

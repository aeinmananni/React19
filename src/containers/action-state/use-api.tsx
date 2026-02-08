import { use, Suspense } from "react";

const fetchUsers = async () => {
  const users_api: string = "https://jsonplaceholder.typicode.com/users";

  const response = await fetch(users_api);

  return response.json();
};

const users = fetchUsers();
export default function UseApi() {
  const data = use(users);
  return (
    <Suspense fallback={<p>loading....</p>}>
      <div className="w-full h-full overflow-y-auto">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Suspense>
  );
}

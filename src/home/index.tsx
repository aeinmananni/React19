import { Outlet } from "react-router";
import { Link } from "../components";

const Home = () => {
  return (
    <>
      <div className="w-1/6 h-full border-2 border-sky-800 p-2 flex flex-col gap-2">
        <Link to={"useTransition"}>useTransision</Link>
        <Link to={"formActionState"}>formActionState</Link>
        <Link to={"useActionState"}>useActionState</Link>
        <Link to={"useOptimistic"}>useOptimistic</Link>
        <Link to={"Refs"}>Refs</Link>
        <Link to={"useApi"}>UseApi</Link>
        <Link to={"blog-post"}>blogPost</Link>
      </div>
      <div className="w-full border-2 border-sky-800 overflow-hidden p-6">
        <Outlet />
      </div>
    </>
  );
};

export default Home;

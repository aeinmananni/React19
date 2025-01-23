import { Actions } from "../components/actions";
import { Products } from "../components/products";
import { useTabSwitch } from "../hooks";

export default function Home() {
  const { switchTab, tab, setStyleHandler, isPendding } = useTabSwitch();
  return (
    <main>
      <nav className="flex gap-5 m-4">
        <button
          className={setStyleHandler("Home")}
          onClick={() => switchTab("Home")}
        >
          Home Page
        </button>
        <button
          className={setStyleHandler("Products")}
          onClick={() => switchTab("Products")}
        >
          Products
        </button>
        <button
          className={setStyleHandler("About")}
          onClick={() => switchTab("About")}
        >
          About
        </button>
        <button
          className={setStyleHandler("actions")}
          onClick={() => switchTab("actions")}
        >
          actions
        </button>
      </nav>
      <div>
        {isPendding && <small>Loading....</small>}
        {tab === "Home" && <h1>Home Page</h1>}
        {tab === "Products" && <Products />}
        {tab === "About" && <h1>About</h1>}
        {tab === "actions" && <Actions />}
      </div>
    </main>
  );
}

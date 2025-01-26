import { ActionOld, ActionNew } from "../components/actions";
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
          className={setStyleHandler("actionOld")}
          onClick={() => switchTab("actionOld")}
        >
          actionOld
        </button>
        <button
          className={setStyleHandler("actionNew")}
          onClick={() => switchTab("actionNew")}
        >
          actionNew
        </button>
      </nav>
      <div>
        {isPendding && <small>Loading....</small>}
        {tab === "Home" && <h1>Home Page</h1>}
        {tab === "Products" && <Products />}
        {tab === "About" && <h1>About</h1>}
        {tab === "actionOld" && <ActionOld />}
        {tab === "actionNew" && <ActionNew />}
      </div>
    </main>
  );
}

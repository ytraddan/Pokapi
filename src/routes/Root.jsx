import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Navlink from "../components/NavLink";

function Root() {
  const [activePage, setActivePage] = useState("home");

  function updatePage(id) {
    setActivePage(id);
  }
  return (
    <div className=" flex flex-col items-center min-h-screen  bg-zinc-900 text-zinc-200 font-serif">
      <ul className="mt-10 text-zinc-500">
        <Navlink link={"/home"} id="home" updatePage={updatePage}>
          Home
        </Navlink>
        <Navlink link={"/search"} id="search" updatePage={updatePage}>
          Search
        </Navlink>
        <Navlink link={"/random"} id="random" updatePage={updatePage}>
          Random {activePage}
        </Navlink>
      </ul>
      <Outlet />
    </div>
  );
}
export default Root;
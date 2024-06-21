import { useContext } from "react";
import { GlobalContext } from "../../context";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { searchParam, setSearchParam, handleSearchSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="w-screen h-[4.5rem] bg-[rgba(255,255,255,0.1)] backdrop-blur z-10 flex justify-between items-center py-4 px-8 mx-auto gap-5 lg:gap-0 shadow-md fixed top-0 left-0">
      <NavLink to={"/"}>
        <h2 className="cursor-pointer select-none">
          <span className="text-3xl font-bold text-slate-800">Food</span>
          <span className="text-3xl font-semibold text-green-800 ">Recipe</span>
        </h2>
      </NavLink>

      <form
        onSubmit={handleSearchSubmit}
        className="flex justify-center items-center shadow-md rounded-xl focus-within:border-4 border-blue-300"
      >
        <input
          type="text"
          placeholder="Search Here...."
          className="w-80 px-4 py-2 rounded-s-md outline-none"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
        />
        <button
          type="submit"
          className=" h-10 px-4 bg-slate-500 rounded-e-md text-white text-[1.08rem] text-center font-small active:scale-[0.98] hover:bg-slate-600 "
        >
          Search
        </button>
      </form>
      <div className="mr-4 text-lg font-medium">
        <ul className="select-none flex justify-center items-center gap-8">
          <li>
            <NavLink
              to={"/"}
              className="h-8 cursor-pointer hover:border-b-4 border-green-600 transition-all"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favourites"}
              className="h-8 cursor-pointer hover:border-b-4 border-green-600 transition-all"
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

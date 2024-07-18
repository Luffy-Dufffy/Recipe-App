import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Card({ item }) {
  const { favouriteRecipeList, handleAddAndRemoveToFavouriteList } =
    useContext(GlobalContext);

  function checkIsAlreadyFavourite() {
    if (
      favouriteRecipeList.some((favouriteItem) => favouriteItem.id === item.id)
    ) {
      return "Remove from Favourites😭";
    }
    return "Add To Favourites😍";
  }

  return (
    <div className="h-[22rem] w-72 p-2 rounded-md shadow-lg transition-all duration-75 hover:translate-y-[-3px] cursor-pointer">
      <img
        src={item.image_url}
        alt={item.title}
        loading="lazy"
        className="h-[50%] w-[100%] object-cover bg-slate-800 rounded-md mb-3 text-white"
      />
      <div>
        <p className="ml-5 text-blue-700 italic text-sm">{item.publisher}</p>
        <h2 className=" text-center font-bold text-lg h-6 overflow-hidden">
          {item?.title}
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-6">
        <Link
          to={`/recipe-details/${item.id}`}
          className="h-8 min-w-[90%] rounded-lg px-4 text-sm bg-zinc-700 text-white text-center content-center"
        >
          View Details
        </Link>
        <button
          className="h-8 min-w-[90%] rounded-lg px-4 text-sm bg-blue-600 text-white"
          onClick={() => handleAddAndRemoveToFavouriteList(item)}
        >
          {checkIsAlreadyFavourite()}
        </button>
      </div>
    </div>
  );
}

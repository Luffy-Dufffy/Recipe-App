import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <div className="h-[22rem] w-72 p-2 rounded-md shadow-lg transition-all duration-75 hover:translate-y-[-3px] cursor-pointer">
      <img
        src={item.image_url}
        alt={item.title}
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
        <button className="h-8 min-w-[90%] rounded-lg px-4 text-sm bg-blue-600 text-white">
          Add To Favourites
        </button>
      </div>
    </div>
  );
}

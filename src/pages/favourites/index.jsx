import { useContext } from "react";
import { GlobalContext } from "../../context";
import Card from "../../components/card";

function Favourites() {
  const { favouriteRecipeList, setFavouriteRecipeList } =
    useContext(GlobalContext);
  return (
    <main className="mt-[6rem]">
      <h2 className="text-2xl font-semibold text-center mt-20 bg-zinc-500 backdrop-blur-sm p-5 text-white">
        Favourite Foods🍔 Recipe List ❤️💕
      </h2>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10  w-[65%]">
        {favouriteRecipeList.length > 0 ? (
          favouriteRecipeList.map((favouriteRecipeItem, index) => {
            return <Card key={index} item={favouriteRecipeItem} />;
          })
        ) : (
          <div className="mt-36 font-bold bg-zinc-500 backdrop-blur-sm p-5 text-white rounded-lg">
            🫣 No Recipe Items Added to the favourite yet 🫣
          </div>
        )}
      </div>
    </main>
  );
}

export default Favourites;

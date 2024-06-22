import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import { useParams } from "react-router-dom";

function Details() {
  const { loading, recipeDetailData, handleRecipeDetailsView } =
    useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    handleRecipeDetailsView(id);
  }, [id]);

  return (
    <main className="mt-[6rem] flex justify-center items-center">
      {loading && <div>Loading....</div>}
      {!loading && recipeDetailData?.recipe && (
        <div className="min-h-[80vh] w-screen flex items-start p-10 gap-16 ">
          <img
            src={recipeDetailData.recipe?.image_url}
            alt="Food image"
            draggable={false}
            className="h-[25rem] w-2/5 bg-slate-300 object-center object-contain rounded-lg"
          />
          <div className="w-3/5 ">
            <div>
              <h2 className="text-3xl font-bold tracking-[3px] ">
                {recipeDetailData.recipe?.title}
              </h2>
              <p className="ml-3 text-blue-500 text-xs mt-2 italic font-semibold">
                Publisher: {recipeDetailData.recipe?.publisher}
              </p>
            </div>

            <hr className=" my-3 h-1 bg-slate-600" />

            <div className="text-slate-800 px-4">
              <h4 className="font-bold flex item-center gap-3 text-xl">
                Cooking Time:
                <p className="italic font-semibold text-lg ">
                  {recipeDetailData.recipe?.cooking_time} minutes
                </p>
              </h4>
              <h4 className="font-bold flex item-center gap-3 text-xl">
                Servings:{" "}
                <p className="italic font-semibold text-lg ">
                  {recipeDetailData.recipe.servings}
                </p>
              </h4>
              <h4 className="font-bold flex flex-col gap-3 text-xl mt-6 tracking-wider ">
                Recipe
                <ul className="text-lg font-semibold px-10 list-outside list-disc">
                  {recipeDetailData.recipe.ingredients.map(
                    (ingredientItem, index) => {
                      return (
                        <li
                          key={index}
                          className="pl-2"
                        >{`${ingredientItem.quantity} ${ingredientItem?.unit} ${ingredientItem.description}`}</li>
                      );
                    }
                  )}
                </ul>
              </h4>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Details;

import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import { useParams } from "react-router-dom";

function Details() {
  const { loading, recipeDetailData, handleRecipeDetailsView } =
    useContext(GlobalContext);
  console.log(recipeDetailData);

  const { id } = useParams();

  useEffect(() => {
    handleRecipeDetailsView(id);
  }, [id]);

  return (
    <main className="mt-[6rem] flex justify-center items-center">
      {loading && <div>Loading....</div>}
      {recipeDetailData?.recipe && (
        <div className="h-[80vh] w-screen flex items-start p-10 gap-16">
          <img
            src={recipeDetailData.recipe?.image_url}
            alt="Food image"
            className="h-3/4 w-2/5 bg-slate-300 object-center object-contain rounded-lg"
          />
          <div className="w-3/5">
            <h2 className="text-3xl font-bold tracking-[3px] ">
              {recipeDetailData.recipe?.title}
            </h2>
            <p className="ml-3 text-blue-500 text-xs mt-2 italic font-semibold">
              Publisher: {recipeDetailData.recipe?.publisher}
            </p>
            <hr className=" my-3 h-1 bg-slate-600" />
            <h4 className="text-lg font-semibold">
              <p className="italic font-semibold">
                {recipeDetailData.recipe?.cooking_time} minutes
              </p>
            </h4>
            <h4 className="text-lg font-semibold">
              Servings:{" "}
              <p className="italic font-semibold">
                {recipeDetailData.recipe.servings}
              </p>
            </h4>
            p
          </div>
        </div>
      )}
    </main>
  );
}

export default Details;

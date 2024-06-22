import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../useLocalStorage";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [savedFavouriteItems, setSavedFavouriteItems] = useLocalStorage(
    "savedFavouriteList",
    []
  );
  const [searchParam, setSearchParam] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [recipeDetailData, setRecipeDetailData] = useState({});
  const [favouriteRecipeList, setFavouriteRecipeList] =
    useState(savedFavouriteItems);

  useEffect(() => {
    setSavedFavouriteItems(favouriteRecipeList);
  }, [favouriteRecipeList, setSavedFavouriteItems]);

  async function handleSearchSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const respData = await res.json();
      if (respData && respData.results && respData.data.recipes.length > 0) {
        setErrMsg("");
        setSearchData(respData.data.recipes);
      } else {
        setSearchData([]);
        setErrMsg("No data avaiable.");
      }
    } catch (error) {
      setSearchData([]);
      setErrMsg(error.message);
    } finally {
      setSearchParam("");
      setLoading(false);
    }
  }

  async function handleRecipeDetailsView(recipeId) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
      );
      const recipeData = await res.json();
      if (recipeData && recipeData.data) {
        setErrMsg("");
        setRecipeDetailData(recipeData.data);
      } else {
        setRecipeDetailData({});
        setErrMsg("No data avaiable.");
      }
    } catch (error) {
      setRecipeDetailData({});
      setErrMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleAddAndRemoveToFavouriteList(newFavouriteItem) {
    if (newFavouriteItem) {
      if (
        !favouriteRecipeList.some((item) => item.id === newFavouriteItem.id)
      ) {
        setFavouriteRecipeList((f) => [...f, newFavouriteItem]);
      } else {
        setFavouriteRecipeList((f) =>
          f.filter((favouriteItem) => favouriteItem.id !== newFavouriteItem.id)
        );
      }
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSearchSubmit,
        searchData,
        setSearchData,
        loading,
        setLoading,
        errMsg,
        setErrMsg,
        recipeDetailData,
        setRecipeDetailData,
        handleRecipeDetailsView,
        favouriteRecipeList,
        setFavouriteRecipeList,
        handleAddAndRemoveToFavouriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;

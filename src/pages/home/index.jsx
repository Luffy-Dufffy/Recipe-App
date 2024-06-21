import { useContext } from "react";
import Card from "../../components/card";
import { GlobalContext } from "../../context";

function Home() {
  const { searchData, loading, errMsg } = useContext(GlobalContext);

  console.log(searchData);
  return (
    <main className="mt-[8rem] flex justify-center items-center">
      {searchData.length <= 0 && !loading && (
        <h2 className="w-[100%] text-center font-bold text-xl">
          {errMsg ? errMsg : `No Item to show. Search something like "Curry".`}
        </h2>
      )}

      {loading && (
        <div className="absolute top-[45%] left-[46%] text-2xl font-bold select-none">
          Loading.....
        </div>
      )}

      {!errMsg && !loading && searchData.length > 0 && (
        <>
          <div className="grid grid-cols-3 gap-y-8 gap-x-5 place-content-center w-[65%]">
            {searchData.map((dataItem, index) => {
              return (
                <Card
                  key={index}
                item={dataItem}
                />
              );
            })}
          </div>
        </>
      )}
    </main>
  );
}

export default Home;

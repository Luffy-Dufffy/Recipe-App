import { useContext } from "react";
import Card from "../../components/card";
import { GlobalContext } from "../../context";

function Home() {
  const { searchData, loading, errMsg } = useContext(GlobalContext);

  return (
    <main className="mt-[8rem] flex justify-center items-center">
      {searchData.length <= 0 && !loading && (
        <h2 className=" min-w-[30%] text-center font-bold text-xl mt-36 bg-zinc-500 backdrop-blur-sm p-5 text-white">
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
          <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10  w-[65%]">
            {searchData.map((dataItem, index) => {
              return <Card key={index} item={dataItem} />;
            })}
          </div>
        </>
      )}
    </main>
  );
}

export default Home;

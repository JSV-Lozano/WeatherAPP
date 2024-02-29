import { useEffect } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { ListSearch } from "../../types/WeatherAppTypes";
import { useWeatherContext } from "../../Context/context";
import { useWather } from "../../Hooks/useWather";

function Header(): JSX.Element {
  const { state, dispatch } = useWeatherContext();
  const { getData, getListSearch, handleSearch, noShowMenuList } = useWather();

  useEffect(() => {
    if (state.searchInput.length <= 1) {
      dispatch({ type: "GET_DATA_LIST_CITYS", payload: [] });
    }
    if (state.searchInput) {
      setTimeout(() => {
        getListSearch();
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchInput]);
  return (
    <header
      className="flex flex-col sm:flex-row text-center gap-5 sm:gap-0 sm:justify-between"
      onClick={noShowMenuList}
    >
      <h1 className="text-4xl font-bold">
        Weather
        <span className="text-red-500">APP</span>
      </h1>
      <div className="bg-[#1d1d1db0] rounded-xl p-2 xl:w-[30%] flex flex-col relative">
        <input
          className="rounded-xl bg-transparent w-full p-1"
          type="text"
          placeholder="Buscar ciudad"
          onChange={handleSearch}
        />
        {state.searchList && (
          <ul
            className={`${
              state.searchList.length > 1 &&
              "border-t-[1px] absolute bg-[#1d1d1d] p-2 top-[100%] left-0 right-0 w-full rounded-b-xl"
            } flex flex-col gap-2 z-10 ${
              state.showMenuList ? "opacity-100" : "opacity-0 invisible"
            }`}
          >
            {state.searchList?.map((item: ListSearch) => (
              <li
                className="mt-2 w-full border-b-[1px] p-1 flex items-center gap-2"
                key={item.lat}
              >
                <FaLocationCrosshairs size={19} />
                <button
                  className="w-full text-start flex flex-col"
                  onClick={() => getData(item.name)}
                  type="submit"
                >
                  {item.name}
                  <span className="opacity-50">
                    {item.state} {item.country}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export { Header };

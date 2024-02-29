import axios from "axios";
import { useWeatherContext } from "../Context/context";

function useWather() {
  const { state, dispatch } = useWeatherContext();
  const APIKEY = "97a316bbc5e0c546b82c81050a217391";
  //   const APISearchCity =
  //     "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}";
  //   const APIWeatherApp =
  //     "https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}";

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH_INPUT", payload: e.target.value });
  };
  const getListSearch = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${state.searchInput}&limit=5&appid=${APIKEY}`
      );
      dispatch({ type: "GET_DATA_LIST_CITYS", payload: response.data });
      dispatch({ type: "SHOW_MENU_LIST", payload: true });
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async (value: string) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKEY}&lang=es
        `
      );
      dispatch({ type: "GET_DATA_CITY", payload: response.data });
      dispatch({ type: "SHOW_MENU_LIST", payload: false });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      console.log(err);
    }
  };

  const noShowMenuList = () => {
    dispatch({ type: "SHOW_MENU_LIST", payload: false });
  };

  return { getData, getListSearch, handleSearch, noShowMenuList };
}

export { useWather };

import { DataCity, ListSearch } from "../types/WeatherAppTypes";

type WeatherAction =
  | { type: "SET_SEARCH_INPUT"; payload: string }
  | { type: "GET_DATA_LIST_CITYS"; payload: ListSearch[] }
  | { type: "GET_DATA_CITY"; payload: DataCity }
  | { type: "SHOW_MENU_LIST"; payload: boolean }
  | { type: "SET_LOADING"; payload: boolean };

interface WeatherState {
  searchInput: string;
  searchList: ListSearch[];
  data: DataCity | null;
  showMenuList: boolean;
  loading: boolean;
}

const initialWatherState: WeatherState = {
  searchInput: "",
  searchList: [],
  data: null,
  showMenuList: false,
  loading: false,
};
const weatherReducer = (state: WeatherState, action: WeatherAction) => {
  switch (action.type) {
    case "SET_SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.payload,
      };
    case "GET_DATA_LIST_CITYS":
      return {
        ...state,
        searchList: action.payload,
      };
    case "GET_DATA_CITY":
      return {
        ...state,
        data: action.payload,
      };
    case "SHOW_MENU_LIST":
      return {
        ...state,
        showMenuList: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export { initialWatherState, weatherReducer };

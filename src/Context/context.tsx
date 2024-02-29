import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { initialWatherState, weatherReducer } from "../Reducers/watherReducers";
import { DataCity, ListSearch } from "../types/WeatherAppTypes";

type WeatherActions =
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
type Action = WeatherActions;

const WeatherContext = createContext<
  { state: WeatherState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

type WeatherProviderProps = {
  children: ReactNode;
};
const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: WeatherState, action: Action) => weatherReducer(state, action),
    initialWatherState
  );
  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
const useWeatherContext = (): {
  state: WeatherState;
  dispatch: React.Dispatch<Action>;
} => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error(
      "useWeatherContext debe ser utilizado dentro de WeatherProvider"
    );
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { WeatherProvider, useWeatherContext };

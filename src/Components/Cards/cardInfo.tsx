import { useWeatherContext } from "../../Context/context";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import {
  LiaTemperatureHighSolid,
  LiaTemperatureLowSolid,
} from "react-icons/lia";
import { LoaderCards } from "../Loader";
function CardInfo(): JSX.Element {
  const { state } = useWeatherContext();
  return (
    <section className="bg-[#1d1d1db0] w-full rounded-xl p-5 xl:min-h-[30rem] grid xl:grid-cols-4 gap-5 items-center">
      {state.loading ? (
        <LoaderCards />
      ) : (
        <>
          {state.data && (
            <>
              <div className="bg-[#1d1d1de3] rounded-2xl min-h-[20rem] p-5 w-full flex flex-col items-center">
                <p className="text-2xl opacity-50 text-start w-full">Now</p>
                <h2 className="flex items-center text-lg gap-2 opacity-60 text-start w-full">
                  {`${state.data?.name}, ${state.data?.sys.country}`}
                </h2>
                <img
                  className="w-[30%]"
                  src={`https://openweathermap.org/img/w/${state.data?.weather[0].icon}.png`}
                  alt=""
                />
                <p className="w-full text-start text-3xl font-bold">
                  {state.data?.weather[0].description &&
                    state.data.weather[0].description.charAt(0).toUpperCase() +
                      state.data.weather[0].description.slice(1)}
                </p>
                <p className="w-full text-start my-auto flex gap-2 items-center text-2xl">
                  <WiHumidity size={35} />
                  Humidity:
                  <span>{state.data?.main.humidity}%</span>
                </p>
              </div>
              <div className="bg-[#1d1d1de3] rounded-2xl min-h-[20rem] p-5 w-full flex flex-col items-center">
                <p className="text-2xl opacity-50 text-start w-full">Now</p>
                <h2 className="flex items-center text-lg gap-2 opacity-60 text-start w-full">
                  {`${state.data?.name}, ${state.data?.sys.country}`}
                </h2>
                <span className="text-xl my-2 opacity-85">Wind</span>
                <FaWind size={100} />
                <p className="text-3xl text-start w-full mt-2 flex gap-2 font-bold">
                  <span>{state.data?.wind.speed} m/s</span>
                </p>
              </div>
              <div className="bg-[#1d1d1de3] rounded-2xl min-h-[20rem] p-5 w-full flex flex-col items-center">
                <p className="text-2xl opacity-50 text-start w-full">Now</p>
                <h2 className="flex items-center text-lg gap-2 opacity-60 text-start w-full">
                  {`${state.data?.name}, ${state.data?.sys.country}`}
                </h2>
                <span className="text-xl my-2 opacity-85">Min.Temperature</span>
                <LiaTemperatureHighSolid size={100} />
                <p className="text-3xl text-start w-full mt-2 flex gap-2 font-bold">
                  {state.data?.main.temp_min !== undefined &&
                    (state.data?.main.temp_min - 273.15).toFixed(1)}
                  °C
                </p>
              </div>
              <div className="bg-[#1d1d1de3] rounded-2xl min-h-[20rem] p-5 w-full flex flex-col items-center">
                <p className="text-2xl opacity-50 text-start w-full">Now</p>
                <h2 className="flex items-center text-lg gap-2 opacity-60 text-start w-full">
                  {`${state.data?.name}, ${state.data?.sys.country}`}
                </h2>
                <span className="text-xl my-2 opacity-85">Max.Temperature</span>
                <LiaTemperatureLowSolid size={100} />
                <p className="text-3xl text-start w-full mt-2 flex gap-2 font-bold">
                  {state.data?.main.temp_max !== undefined &&
                    (state.data?.main.temp_max - 273.15).toFixed(1)}
                  °C
                </p>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export { CardInfo };

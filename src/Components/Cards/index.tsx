import { useWeatherContext } from "../../Context/context";
import { FaTemperatureLow, FaCalendar, FaMapMarker } from "react-icons/fa";
import { LoaderCard } from "../Loader";

function CardPrimary(): JSX.Element {
  const { state } = useWeatherContext();
  const fechaActual = new Date();
  const año = fechaActual.getFullYear();
  const mesOpciones = { month: "long" as const };
  const mes = fechaActual.toLocaleDateString("en-US", mesOpciones);
  const dia = fechaActual.getDate();
  const opcionesDia = { weekday: "long" as const };
  const diaDeLaSemana = fechaActual.toLocaleDateString("en-US", opcionesDia);
  const diaActual =
    diaDeLaSemana.charAt(0).toUpperCase() + diaDeLaSemana.slice(1);
  const fecha = `${mes} ${dia}, ${año}`;
  return (
    <>
      {state.loading ? (
        <LoaderCard />
      ) : (
        <div className="bg-[#1d1d1db0] w-full sm:w-[35rem] min-h-[25rem] p-5 rounded-2xl">
          {state.data && (
            <>
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full flex flex-col gap-4 border-b-[1px]">
                  <p className="text-2xl opacity-50">Now</p>
                  <p className="text-3xl font-bold">{diaActual}</p>
                  <div className="flex items-center gap-10 text-5xl justify-center">
                    <p className="text-7xl">
                      {state.data?.main.temp !== undefined &&
                        (state.data.main.temp - 273.15).toFixed(1)}
                      °C
                    </p>
                    <FaTemperatureLow />
                  </div>
                  <p className="my-2 opacity-80 text-xl">
                    {state.data?.weather[0].description &&
                      state.data.weather[0].description
                        .charAt(0)
                        .toUpperCase() +
                        state.data.weather[0].description.slice(1)}
                  </p>
                </div>
                <p className="flex items-center text-lg gap-2 opacity-60">
                  <FaCalendar />
                  {fecha}
                </p>
                <h2 className="flex items-center text-lg gap-2 opacity-60">
                  <FaMapMarker />
                  {`${state.data?.name}, ${state.data?.sys.country}`}
                </h2>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export { CardPrimary };

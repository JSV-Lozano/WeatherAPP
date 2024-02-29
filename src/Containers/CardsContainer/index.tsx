import { CardPrimary } from "../../Components/Cards";
import { CardInfo } from "../../Components/Cards/cardInfo";
import { useWeatherContext } from "../../Context/context";

function CardsContainer() {
  const { state } = useWeatherContext();
  return (
    <section className="z-1 mt-20 flex flex-col xl:flex-row gap-20 items-center">
      {!state.data ? (
        <p className="w-full text-center text-2xl xl:text-5xl opacity-80 h-[30rem]">
          ¡Busca el lugar que quieras para conocer el clima!
        </p>
      ) : (
        <>
          <CardPrimary />
          <CardInfo />
        </>
      )}
    </section>
  );
}

export { CardsContainer };

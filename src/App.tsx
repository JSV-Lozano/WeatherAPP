import { Header } from "./Components/Header";
import { CardsContainer } from "./Containers/CardsContainer";
import { WeatherProvider } from "./Context/context";

function App(): JSX.Element {
  return (
    <WeatherProvider>
      <section className="h-screen text-white p-10">
        <Header />
        <CardsContainer />
      </section>
    </WeatherProvider>
  );
}

export default App;

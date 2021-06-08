import BookingScreen from "./BookingScreen";
import { getonair, getmovies } from "./Endpoints";
import Moviecom from "./moviecom";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="app">
        <Moviecom endpoint={getonair} title="Top 10" top={true} />
        <Moviecom endpoint={getmovies} title="Top Movies" />
        <BookingScreen />
      </div>
    </>
  );
}

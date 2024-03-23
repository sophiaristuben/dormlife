import "./App.css";
import Tabs from "./Components/TabComponent/Tabs";
import { Header } from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <Tabs />
      </div>
    </>
  );
}
export default App;
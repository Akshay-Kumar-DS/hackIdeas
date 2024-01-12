import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="mainContainer w-full max-w-[1280px]  h-screen mx-auto ">
      <Navbar />
      <section className="mt-[100px] h-screen w-full max-w-[1280px">
        <Homepage />
      </section>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import HelloFunc from "./HelloFunc";
import HelloClass from "./HelloClass";

function App() {
  return (
    <>
      <HelloFunc counter = {0} />
      <HelloClass/>
    </>
  );
}

export default App;

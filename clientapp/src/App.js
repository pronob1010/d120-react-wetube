import "./App.css";
import Mainapp from "./components/main";
import Input from "./components/input";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Wetube!!!</h1>
      <hr></hr>
      <Input />
      <hr></hr>
      <Mainapp title = "The best video of youtube." dateAdded="4 days ago." channel="Daynotes"/>
      <Mainapp title = "Video of youtube." dateAdded="2 days ago." channel="Daynotes2"/>
    </div>
  )
}

export default App;

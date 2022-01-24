
import './App.css';
import Accordion from "./components/Accordion";

function App() {
    const header = {
        title: "Accordion"
    }

    header.title = "Todos"

  return (
    <div className="App">
        <Accordion title={header.title}/>
    </div>
  );
}

export default App;

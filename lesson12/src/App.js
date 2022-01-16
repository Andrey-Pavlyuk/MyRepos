
import './App.css';
import News from "./components/News";

function App() {
  return (
    <div className="App">
        {Array.from({length: 3}, (_, index) => <News key={index} />)}
    </div>
  );
}

export default App;

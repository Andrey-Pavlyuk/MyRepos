import json from "./source.json"
import './App.css';
import News from "./components/News";

function App() {
      return (
        <div className="App">
            {json.map(item =>
                <News key={item.id} item={item}/>
            )}
        </div>
      );
}

export default App;

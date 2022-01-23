import json from "./source.json"
import './App.css';
import News from "./components/News";

function App() {
      return (
        <div className="App">
            {/*{Array.from({length: 3}, (_, index) => <News key={index} />)}*/}
            {json.map(item =>
                <News item={item}/>
            )}
        </div>
      );
}

export default App;

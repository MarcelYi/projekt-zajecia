import './App.css';
import Home from './home/Home'
import Map from './map/Map'

// #WYWOŁUJE TREŚĆ Z JAKIEGOŚ ELEMENTU
// #importujemy z określonego miejsca z dysku


function App() {
  return (
    <div className="App">
      {/* <Home />  -----CTRL + ? */}
    <Map />
    </div>
  );
}

export default App;

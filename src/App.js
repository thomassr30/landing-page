
import Navbar from "./Componentes/Navbar"
import Jumbotron from './Componentes/Jumbotron'
import Cards from './Componentes/Cards'

function App() {
  
  <Navbar titulo="Start Bootstrap" />


  const tituloCard = [
    'Card title 1',
    'Card title 2',
    'Card title 3',
    'Card title 4',
  ]

  return (
    <div className="App">
      <h1>navbar</h1>
      <div className="container">
        <Jumbotron />
        <Cards tituloCard={tituloCard} />
      </div>
    </div>
  );

}

export default App;

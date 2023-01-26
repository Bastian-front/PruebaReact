
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';
import Header from "./Componentes/Header";
import MiApi from "./Componentes/MiApi";

function App() {
const [valorBusqueda,setValorBusqueda] = useState('');
  
  return (
  <div>
    <Header brand='Rick and Morty APP' setValorBusqueda={setValorBusqueda}></Header>
    <MiApi valorBusqueda={valorBusqueda}></MiApi>
  </div>
  

 
    
  );
}

export default App;
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Titulo from './components/Titulo';


function App() {
  return (
    <>
        <Titulo title= "Perfeito Cabelo"/>
        <NavBar background={"transparent"}/>
        <ItemListContainer greeting= "Selecciona nuestros servicios"/>
    </>
  );
}

export default App;

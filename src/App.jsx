import './App.css';
import NavBar from "./components/NavBar"
import {ItemListContainer} from './components/ItemListContainer'
import Titulo from './components/Titulo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import  "./components/styles/ItemListContainer.css"


function App() {
  return (
    <>
        <BrowserRouter>
        <div>
        <Titulo title= "Perfeito Cabelo"/>
          <div>
          <NavBar background={"transparent"}/>
                      <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/productos/:tipoProducto' element={<ItemListContainer/>}/>
                        <Route path='/item/:productId' element={<ItemDetailContainer/>} />
                      </Routes>
        </div>
    </div>
    </BrowserRouter>
    </>


  )
}

export default App;

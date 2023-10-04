import Navbar from "./NavBar/navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import "bulma/css/bulma.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryID" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
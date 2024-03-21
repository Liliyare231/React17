import { Route, Routes } from "react-router-dom";
import Header from "./component/header/header";
import Main from "./page/main/main";
import Library from "./page/library/library";
import Book from "./page/book/book";
import "./assets/css/style.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <>
      <Header basket={basket} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/library" element={<Library addtoBasket={setBasket} basket={basket}/>}/>
        <Route path="/library/:id" element={<Book />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;

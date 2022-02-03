import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Item';
import NotFound from './pages/404';
import ItemDetail from "./components/Cards/ItemDetail";
 
const App = () => {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Cards />} />
                <Route path='/item/:idItem' element={<ItemDetail />} />
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
      <Footer nombre='Santiago Chausis' />
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/ItemList';
import NotFound from './404'
import ItemDetail from '../components/Cards/ItemDetail';
import Cart from './Cart';

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/item/:idItem' element={<ItemDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Home;

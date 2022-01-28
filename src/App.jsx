import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Item';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Cards></Cards>
      <Footer nombre='Santiago Chausis' />
    </div>
  );
}

export default App;

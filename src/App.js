import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Cards from './components/Cards/cards';

function App() {
  return (
    <div className='App'>
      <Header />
      <Cards></Cards>
      <Footer nombre='Santiago Chausis' />
    </div>
  );
}

export default App;

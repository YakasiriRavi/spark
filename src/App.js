




import './App.css';

import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Cards from './components/Cards'
import DetailsPage from './components/DetailsPage'



function App() {

  const cardsrender= true;
  const detailspage = true
  return (
    <div className='App main-bg'>
      <Navbar />
      <Carousel />
      {cardsrender && <Cards/> }
      {detailspage && <DetailsPage/>}
      <Footer />

    </div>

  );
}

export default App;

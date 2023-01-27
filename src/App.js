import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import CitiesLayout from './pages/cities';
import Contact from './pages/Contact';
import City from './pages/cities/City'
import NotFound from './pages/NotFound';
import Barcelona from './pages/cities/Barcelona';
import London from './pages/cities/London';
import Cappadocia from './pages/cities/Cappadocia';

function App() {
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/cities">Cities</NavLink>
        <NavLink className="navlink" to="contact">Contact</NavLink>
      </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<CitiesLayout />}>
        <Route index={true} element={<City />} />
        <Route path='barcelona' element={<Barcelona />} />
        <Route path='london' element={<London />} />
        <Route path='cappadocia' element={<Cappadocia />} />
      </Route>

      <Route path='/contact' element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;

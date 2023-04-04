import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import MovieDetails from './Pages/MovieDetails';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="about" element={<About />} ></Route>
          <Route path="movies/:id" element={<MovieDetails></MovieDetails>} ></Route>
          <Route path="*" element={<NotFound></NotFound>} ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

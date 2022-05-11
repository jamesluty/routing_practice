import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Results from './Components/Results';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/4">Four</Link>
        {" | "}
        <Link to="/hello">Hello</Link>
        {" | "}
        <Link to="/hello/blue/red">Hello with color</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:input" element={<Results/>}/>
          <Route path="/:input/:text" element={<Results/>}/>
          <Route path="/:input/:text/:background" element={<Results/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

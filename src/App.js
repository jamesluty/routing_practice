import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Four from './Components/Four';
import HelloColored from './Components/HelloColored';
import Hello from './Components/HelloColored';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/four">Four</Link>
        {" | "}
        <Link to="/hello">Hello</Link>
        {" | "}
        <Link to="/hello/blue/red">Hello with color</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/four" element={<Four/>}/>
          <Route path="/hello" element={<Hello/>}/>
          <Route path="/hello/:text/:background" element={<HelloColored/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

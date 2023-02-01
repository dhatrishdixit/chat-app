import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style.scss";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <Routes>
  
    <Route path ="/" exact element ={<Home />} />
    <Route path ="/login" exact element ={<Login />} />
    <Route path ="/register" exact element ={<Register />} />
   
   </Routes>
   </BrowserRouter>
  );
}
export default App;

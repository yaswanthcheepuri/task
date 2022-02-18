import Navbarcomponents from './components/Navbarcomponents'
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Contactus from './components/Contactus'
function App() {
  return (
    <div>
    <Navbarcomponents/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    </div>
  );

}



export default App;

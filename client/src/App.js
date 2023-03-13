import './Styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//all pages
import SignInSide from './Pages/Mui_Signin';
import SignUp from './Pages/Mui_Signup';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path='/' 
        element={<SignInSide/>}
        />
        <Route 
        path='/signup' 
        element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//all pages
import SignInSide from './Pages/Mui_Signin';
import SignUp from './Pages/Mui_Signup';
import LoadingSpinner from './Components/Loader';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInSide/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/loading' element={<LoadingSpinner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

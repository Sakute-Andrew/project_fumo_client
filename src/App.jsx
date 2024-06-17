import { Route, Routes } from 'react-router-dom';
import AuthLayout from './Components/Auth/AuthLayout';
import MainPage from './Components/MainPage/MainPage';


function App() {

  return (
      <main className="">
        <Routes>
          <Route path="/" element={true?<MainPage/>:<AuthLayout/>} />
          
        </Routes>  
      </main>
  )
}

export default App;

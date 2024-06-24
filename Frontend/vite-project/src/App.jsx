import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm.jsx'
import SignupForm from './components/SignupForm.jsx'
import Home from './components/Home.jsx'

function App() {


  return (
    <>
     <BrowserRouter>
        <Home/>
        <Routes>
          <Route path="/signup" element={<SignupForm/>} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss'
import Header from './components/Header/Header'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App

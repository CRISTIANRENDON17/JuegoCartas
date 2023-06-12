import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UsersProvider } from "./Context/UsersContext.jsx"
import Login from "./Modules/Login/Login.jsx"
import Game from "./Modules/Game/Game.jsx"
import Winpage from "./Modules/WinPage/Winpage.jsx"


function App() {
  return (
    <div>
      <BrowserRouter>
        <UsersProvider>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Cards' element={<Game/>} />
            <Route path='/WinPage' element={<Winpage/>} />
          </Routes>
        </UsersProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

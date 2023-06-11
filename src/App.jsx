import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UsersProvider } from "./Context/UsersContext.jsx"
import Login from "./Modules/Login/Login.jsx"
import Cards from "./Modules/Cards/Cards.jsx"


function App() {
  return (
    <div>
      <BrowserRouter>
        <UsersProvider>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Cards' element={<Cards/>} />
          </Routes>
        </UsersProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

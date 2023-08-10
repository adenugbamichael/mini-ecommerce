import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Success from "./components/Success"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}

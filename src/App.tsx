import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import MediaPlayer from "./components/MediaPlayer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
      <MediaPlayer/>
    </BrowserRouter>
  )
}

export default App
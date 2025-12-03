import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import MediaPlayer from "./components/MediaPlayer"
import MusicContextProvider from "./context/MusicContextProvider"

const App = () => {
  return (
    <MusicContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={
            <Home/>} />
        </Routes>
        <MediaPlayer/>
      </BrowserRouter>
    </MusicContextProvider>
  )
}

export default App
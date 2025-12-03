import { createContext } from "react"
import type { MusicType } from "../types/Music"

type MusicContextType = {
    playlist: MusicType[],
    currentMusic: MusicType,
    changeMusic: (nextMusic: MusicType)=>void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

const MusicContextProvider = () => {
  return (
    <div>MusicContextProvider</div>
  )
}

export default MusicContextProvider
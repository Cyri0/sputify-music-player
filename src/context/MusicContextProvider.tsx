import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { MusicType } from "../types/Music"
import { getPlaylist } from "../services/musicApi"


type MusicContextType = {
    playlist: MusicType[],
    currentMusic: MusicType | undefined,
    changeMusic: (nextMusic: MusicType)=>void,
    isLoading: boolean
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

const MusicContextProvider = ({children}:{children: ReactNode}) => {
  const [playlist, setPlaylist] = useState<MusicType[]>([])
  const [currentMusic, setCurrentMusic] = useState<MusicType>()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    getPlaylist().then(res => {
      setPlaylist(res)
      if(res.length > 0){
        setCurrentMusic(res[0])
      }
      setIsLoading(false)
    })
  },[])

  const changeMusic = (nextMusic: MusicType) => {
    setCurrentMusic(nextMusic)
  }
  
  return (
    <MusicContext.Provider value={{changeMusic,currentMusic,playlist, isLoading}}>
        {children}
    </MusicContext.Provider>
  )
}

export const useMusicContext = () => {
  const context  = useContext(MusicContext)
  if(!context){
    throw new Error("No music context!")
  }
  return context
}

export default MusicContextProvider
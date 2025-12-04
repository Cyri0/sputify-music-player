import { useEffect, useRef, useState } from "react"
import { useMusicContext } from "../context/MusicContextProvider"
import { baseURL } from "../services/musicAPI"
import styles from "./MediaPlayer.module.css"
import ProgressBar from "./ProgressBar"

const MediaPlayer = () => {
  const {currentMusic, playlist, changeMusic} = useMusicContext()
  const audioRef = useRef<HTMLAudioElement | undefined>(undefined)
  const [isPlaying, setIsPlaying] = useState(false)

  const speedValues = [0.5, 1, 1.5, 2]
  const [speedIdx, setSpeedIdx] = useState(1)

  const nextMusic = () => {
    if(!currentMusic) return
    audioRef.current?.pause()
    const currentIdx = playlist.indexOf(currentMusic)
    if(playlist.length > currentIdx + 1){
      changeMusic(playlist[currentIdx + 1])
    }
  }

  const prevMusic = () => {
    if(!currentMusic) return
    audioRef.current?.pause()
    const currentIdx = playlist.indexOf(currentMusic)
    if(0 <= currentIdx - 1){
      changeMusic(playlist[currentIdx - 1])
    }
  }

  const togglePlay = () => {
    if(isPlaying){
      audioRef.current?.pause()
      setIsPlaying(false)
    }else{
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  useEffect(()=>{
    if(!currentMusic) return
    const newAudio = new Audio(baseURL + currentMusic.path)
    audioRef.current = newAudio
    if(isPlaying){
      audioRef.current.play()
    }
  },[currentMusic])

  useEffect(()=>{
    if(!currentMusic || !audioRef.current) return
    audioRef.current.playbackRate = speedValues[speedIdx]
  },[speedIdx, currentMusic])

  return (
    <footer className={styles.mediaPlayer}>
      <div className={styles.currentInfo}>
        <img src={baseURL + currentMusic?.album.cover} alt="Album cover" />
        <div>
          <strong>{currentMusic?.title}</strong>
          <a href="#">{currentMusic?.album.artist.name}</a>
        </div>
      </div>

      <div>
        <ProgressBar/>

        <button className={styles.speedBtn} onClick={()=>setSpeedIdx(prev => (prev + 1) == speedValues.length ? 0 : prev + 1)}>
          {speedValues[speedIdx]}x
        </button>
        
        <button className={styles.rewindBtn}>
          <i className="fa-solid fa-rotate-left"></i>
        </button>

        <button className={styles.prevBtn} onClick={prevMusic}>
          <i className="fa-solid fa-backward-step"></i>
        </button>

        <button className={styles.playBtn} onClick={togglePlay}>
          {!isPlaying && <i className="fa-solid fa-circle-play"></i>}
          {isPlaying && <i className="fa-solid fa-circle-pause"></i>}
        </button>

        <button className={styles.nextBtn} onClick={nextMusic}>
          <i className="fa-solid fa-forward-step"></i>
        </button>

        <button className={styles.forwardBtn}>
          <i className="fa-solid fa-rotate-right"></i>
        </button>

      </div>
      <div></div>
    </footer>
  )
}

export default MediaPlayer
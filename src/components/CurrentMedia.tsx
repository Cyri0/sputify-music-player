import { useMusicContext } from "../context/MusicContextProvider"
import { baseURL } from "../services/musicApi"

const CurrentMedia = () => {
  const {currentMusic, isLoading} = useMusicContext()

  return (
    <aside>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !currentMusic && <div><h2>No music selected!</h2></div>}
      {!isLoading && currentMusic && <div>
        <img src={baseURL + currentMusic.album.cover} alt={currentMusic.album.title} />
        <h1>{currentMusic.title}</h1>
        <h2>{currentMusic.album.title}</h2>
        <h3>
          {currentMusic.album.artist.name}
          {currentMusic.feat.map(a => <a href="">, {a.name}</a>)}</h3>
      </div>}
    </aside>
  )
}

export default CurrentMedia
import styles from "./MediaPlayer.module.css"

const MediaPlayer = () => {
  return (
    <footer className={styles.mediaPlayer}>
      <div></div>
      <div>
        <button className={styles.speedBtn}>1x</button>
        
        <button className={styles.rewindBtn}>
          <i className="fa-solid fa-rotate-left"></i>
        </button>

        <button className={styles.prevBtn}>
          <i className="fa-solid fa-backward-step"></i>
        </button>

        <button className={styles.playBtn}>
          <i className="fa-solid fa-circle-play"></i>
        </button>

        <button className={styles.nextBtn}>
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
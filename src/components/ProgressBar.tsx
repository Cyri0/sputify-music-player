import styles from "./ProgressBar.module.css"

const ProgressBar = () => {
  const currentTime = 1000
  const musicLength = 2000
  return (
    <div className={styles.progressBar}>
        <div style={{
            width: `${currentTime / (musicLength / 100)}%`
        }}></div>
    </div>
  )
}

export default ProgressBar
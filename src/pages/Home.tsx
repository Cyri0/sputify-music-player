import Albums from "../components/Albums"
import CurrentMedia from "../components/CurrentMedia"
import Feed from "../components/Feed"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <main className={styles.homePage}>
        <Albums/>
        <Feed/>
        <CurrentMedia/>
    </main>
  )
}

export default Home
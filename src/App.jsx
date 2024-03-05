
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";

function App() {


  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default App

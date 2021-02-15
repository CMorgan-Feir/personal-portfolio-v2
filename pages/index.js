import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingStyles from '../styles/landing.module.css'
import { NavBar } from '../src/components/navbar'
import { Pane } from '../src/components/pane'

export default function Home() {
  return (
    <>
      <NavBar />
      <Pane>
        <div className={LandingStyles["main-intro"]}>
            <div className={LandingStyles["intro-overview-container"]}>
                <h3>Hello, I’m Caoimhe. I write code. I’ve made{" "}
                  <a href="/tabula-rasa"><span className={LandingStyles["wavy-underline"]} id={LandingStyles["green-font"]} data-text="ecommerce sites">ecommerce sites</span></a>,{" "}
                  <a href="/articulate-360"><span className={LandingStyles["wavy-underline"]} id={LandingStyles["yellow-font"]}>VR projects</span></a> and{" "}
                  <a href="/music-mapper"><span className={LandingStyles["wavy-underline"]} id={LandingStyles["pink-font"]}>web apps</span></a>.</h3>
            </div>
        </div>
      </Pane>
    </>
  )
}

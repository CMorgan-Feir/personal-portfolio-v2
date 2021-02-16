import Head from 'next/head'
import Fade from 'react-reveal/Fade';

import styles from '../styles/Home.module.css'
import LandingStyles from '../styles/landing.module.css'
import { NavBar } from '../src/components/navbar'
import { Pane } from '../src/components/pane'
import { WorkContainer } from '../src/components/work-container'
import { VideoContainer } from '../src/components/video-container'
import { SectionBreak } from '../src/components/section-break'

export default function Home() {
  return (
    <>
      <div className={LandingStyles["nav-centre"]}>
        <img className={LandingStyles["logo-image"]} src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/logo.png" />
      </div>
      <Pane>
        <div className={LandingStyles["main-intro"]}>
            <div className={LandingStyles["intro-overview-container"]}>
                <h1>Hello, I’m Caoimhe. I write code. I’ve made{" "}
                  <a href="/tabula-rasa"><span className={LandingStyles["wavy-underline"]} id={LandingStyles["green-font"]} data-text="ecommerce sites">ecommerce sites</span></a>,{" "}
                  <a href="/articulate-360"><span className={LandingStyles["wavy-underline"]} id={LandingStyles["yellow-font"]}>VR projects</span></a> and{" "}
                  <a href="/music-mapper"><span className={LandingStyles["wavy-underline"]} id={LandingStyles["pink-font"]}>web apps</span></a>.
                </h1>
            </div>
        </div>
      </Pane>
      <Pane>
        <SectionBreak title="WORK"/>
        <Fade bottom>
          <WorkContainer 
            heading="A chic approach to curated prints"
            technologies="JavaScript, HTML, CSS, React, Redux, React-Redux, Git, Node.js, Express, Sequelize, Google OAuth"
          />
        </Fade>
        <Fade bottom>
          <VideoContainer 
            heading="An otherworldly art experience"
            technologies="JavaScript, HTML, React 360, Git and plenty of math"
            reversed
          />
        </Fade>
        <Fade bottom>
          <WorkContainer 
            heading="Music taste, made visual"
            technologies="JavaScript, HTML, CSS, Spotify OAuth 2.0, Request, Spotify API, Musixmatch API, D3.js, React, Redux, Express, Express Sessions"
          />
        </Fade>
      </Pane>
      <Pane>
        <SectionBreak title="ABOUT"/>
        Some text about me.
      </Pane>
    </>
  )
}

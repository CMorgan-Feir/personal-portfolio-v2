import Head from 'next/head'
import Fade from 'react-reveal/Fade';

import styles from '../styles/Home.module.css'
import LandingStyles from '../styles/landing.module.css'
import { NavBar } from '../src/components/navbar'
import { Pane } from '../src/components/pane'
import { WorkContainer } from '../src/components/work-container'
import { VideoContainer } from '../src/components/video-container'
import { SectionBreak } from '../src/components/section-break'
import { projects } from '../src/projects'
import { Footer } from '../src/components/footer'

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
                  <a href="#tabula-rasa"><span className={LandingStyles["wavy-underline"]} id={LandingStyles["green-font"]} data-text="ecommerce sites">ecommerce sites</span></a>,{" "}
                  <a href="#articulate-360"><span className={LandingStyles["wavy-underline"]} id={LandingStyles["yellow-font"]}>VR projects</span></a> and{" "}
                  <a href="#music-mapper"><span className={LandingStyles["wavy-underline"]} id={LandingStyles["pink-font"]}>web apps</span></a>.
                </h1>
            </div>
        </div>
      </Pane>
      <Pane>
        <SectionBreak title="WORK"/>
        {projects.map(project => {
          return project.mediaType === 'image' ? 
            <Fade bottom key={project.heading}>
              <WorkContainer 
                projectId={project.projectId}
                heading={project.heading}
                technologies={project.technologies}
                url={project.media}
                reversed={project.reversed}
              />
            </Fade> :
            <Fade bottom key={project.heading}>
              <VideoContainer 
                projectId={project.projectId}
                heading={project.heading}
                technologies={project.technologies}
                url={project.media}
                reversed={project.reversed}
              />
            </Fade>
          
        })}
      </Pane>
      <Pane>
        <SectionBreak title="ABOUT"/>
        <Fade bottom>
          <div className={LandingStyles["about-container"]}>
            <div className={LandingStyles["about-text"]}>
              <h2>
                I used to write about art; now I write code.
              </h2>
              <p>
                Working as an online editor, I started learning basic HTML and CSS to update the website, but the immense satisfaction I got from figuring out solutions drove me to learn more. I was struck by how many parallels there are between writing code and writing more generally—after all, an errant semicolon is an errant semicolon whether it’s in a line of JavaScript or an essay about Impressionist painting.
              </p>
            </div>
            <div className={LandingStyles["about-image-container"]}>
              <img className="about-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/portrait.png"></img>
            </div>
          </div>
        </Fade>
      </Pane>
      <Footer />
    </>
  )
}

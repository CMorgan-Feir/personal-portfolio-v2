import React from 'react';
import Head from 'next/head';
import Fade from 'react-reveal/Fade';

import LandingStyles from '../styles/landing.module.css';
import { About } from '../src/components/about';
import { Pane } from '../src/components/pane';
import { WorkContainer } from '../src/components/work-container';
import { VideoContainer } from '../src/components/video-container';
import { SectionBreak } from '../src/components/section-break';
import projects from '../src/projects';
import { Footer } from '../src/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>CMF</title>
      </Head>
      <div className={LandingStyles['nav-centre']}>
        <img className={LandingStyles['logo-image']} src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/logo.png" alt="logo" />
      </div>
      <Pane>
        <div className={LandingStyles['main-intro']}>
          <div className={LandingStyles['intro-overview-container']}>
            <h1>
              Hello, I’m Caoimhe. I write code.{' '}
              <span className={LandingStyles['intro-overview-second-line']}>
                I’ve made
                {' '}
                <a href="#tabula-rasa"><span className={LandingStyles['wavy-underline']} id={LandingStyles['green-font']} data-text="ecommerce sites">ecommerce sites</span></a>
                ,
                {' '}
                <a href="#articulate-360"><span className={LandingStyles['wavy-underline']} id={LandingStyles['yellow-font']}>VR projects</span></a>
                {' '}
                and
                {' '}
                <a href="#music-mapper"><span className={LandingStyles['wavy-underline']} id={LandingStyles['pink-font']}>web apps</span></a>
                .
              </span>
            </h1>
          </div>
        </div>
      </Pane>
      <Pane>
        <SectionBreak title="WORK" />
        {projects.map((project) => (project.mediaType === 'image'
          ? (
            <Fade bottom key={project.heading}>
              <WorkContainer
                projectId={project.projectId}
                heading={project.heading}
                technologies={project.technologies}
                url={project.media}
                reversed={project.reversed}
              />
            </Fade>
          )
          : (
            <Fade bottom key={project.heading}>
              <VideoContainer
                projectId={project.projectId}
                heading={project.heading}
                technologies={project.technologies}
                url={project.media}
                reversed={project.reversed}
              />
            </Fade>
          )))}
      </Pane>
      <About />
      <Footer />
    </>
  );
}

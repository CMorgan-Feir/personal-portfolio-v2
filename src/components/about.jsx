import React from 'react'
import Fade from 'react-reveal/Fade';
import { Pane } from './pane'
import { SectionBreak } from './section-break'
import AboutStyles from '../../styles/about.module.css'

export const About = () => (
  <Pane>
    <SectionBreak title="ABOUT" />
    <Fade bottom>
      <div className={AboutStyles['about-container']}>
        <div className={AboutStyles['about-empty']} />
        <div className={AboutStyles['about-text']}>
          <h2>
            I like tech, art and their intersection.
          </h2>
          <p>
            Currently, I work as a developer for a software consultancy in Toronto, helping clients bring their digital products to life.
          </p>

          <p>
            Before that, I worked as an online editor, which is when I started learning HTML and CSS to update the website for my small editorial team. I like solving problems and making things beautiful—and get to combine both of these pursuits every day in my work doing web and app development.
          </p>
        </div>
        <div className={AboutStyles['about-empty']} />
        <div className={AboutStyles['about-image-container']}>
          <img className={AboutStyles['about-image']} src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/portrait.png" alt="portrait" />
        </div>
        <div className={AboutStyles['about-empty']} />
      </div>
    </Fade>
  </Pane>
)

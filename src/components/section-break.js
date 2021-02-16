import React from 'react'
import Fade from 'react-reveal/Fade';

import SectionBreakStyles from '../../styles/section-break.module.css'

export const SectionBreak = ({ title }) => (
  <div className={SectionBreakStyles["section-header"]}>
    <p className={SectionBreakStyles["section-title"]}>{title}</p>
    <div className={SectionBreakStyles["section-hr-container"]}>
      <Fade left>
        <div className={SectionBreakStyles["section-hr"]}/>
      </Fade>
    </div>
  </div>
)

import React from 'react'
import PaneStyles from '../../styles/pane.module.css'

export const Pane = ({children}) => (
  <div className={PaneStyles["pane-container"]}>
    {children}
  </div>
)

import React from 'react';
import PropTypes from 'prop-types';
import PaneStyles from '../../styles/pane.module.css';

export const Pane = ({ children }) => (
  <div className={PaneStyles['pane-container']}>
    {children}
  </div>
);

Pane.propTypes = {
  children: PropTypes.element.isRequired,
};

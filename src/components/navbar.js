import React, { useState } from 'react';
import Link from 'next/link';
import NavBarStyles from '../../styles/navbar.module.css';

export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={NavBarStyles['nav-container']}>
      <Link href="/"><img className={NavBarStyles.logo} src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/logo.png" /></Link>
      <div>
        <ul>
          <li>Work</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

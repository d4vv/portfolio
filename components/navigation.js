import React, { useState } from 'react'
import Link from 'next/link'
import { MenuItem } from "./menuitem";
import Hamburger from 'hamburger-react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const MotionNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: var(--primaryColor);
  opacity: 0;
`;

const NavList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  padding: 0 0 0 10%;
  margin: 0;
`;


const Navigation = ({hoverEnter, hoverLeave, isOpen, setOpen, handleNav}) => {

  const variants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
      transition: { delay: .5 }
    },
  }

  const variantsList = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.25 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
  }

  const itemIds = [0, 1, 2, 3];

  return (
    <>
      <MotionNav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={
          isOpen
            ? 'navOpen'
            : 'navHidden'
        }
      >
        <NavList
          variants={variantsList}
        >
          {itemIds.map(i => (
            <MenuItem 
              handleNav={handleNav}
              hoverEnter={hoverEnter}
              hoverLeave={hoverLeave}
              i={i} key={i} 
            />
          ))}
        </NavList>
      </MotionNav>
      <div
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        className={
          isOpen
            ? 'navOpen'
            : ''
        }
      >
      <Hamburger
        onClick={handleNav}
        toggled={isOpen}
        toggle={setOpen}
      />
      </div>
    </>
  )
}

export default Navigation;

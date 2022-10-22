import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Pointer = styled(motion.div)`
  background: rgba(255,255,255,.5);
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: fixed;
  top: 400;
  left: 400;
  pointer-events: none;
  z-index: 1600;

  body.lightMode & {
    background: rgba(0,0,0,.5)!important;
    mix-blend-mode: normal!important;
  }

  body.lightMode &.navOpen {
    background: rgba(255,255,255,.5)!important;
    mix-blend-mode: revert!important;
  }

  body.darkMode & {
    background: rgba(255,255,255,.5);
  }
`;

const Cursor = ({cursorVariant, setCursorVariant, hoverEnter, hoverLeave, isOpen}) => {

  const [mousePosition, setMousePosition] = React.useState({
    x: 400,
    y: 400
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      backgroundColor: "rgba(255,255,255,.5)",
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: "normal"
      // transition: {
      //   type: "spring",
      //   stiffness: 10000,
      //   damping: 100,
      // },
    },
    hover: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: "#f1f1f1",
      mixBlendMode: "difference"
    }
  }

  return (
    <Pointer
      className={
        isOpen
          ? 'navOpen'
          : ''
      }
      variants={variants}
      animate={cursorVariant}
      hoverEnter={hoverEnter}
      hoverLeave={hoverLeave}
    />
  );
};

export default Cursor;

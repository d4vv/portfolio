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
`;

const Cursor = ({cursorVariant, setCursorVariant, hoverEnter, hoverLeave}) => {

  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
      console.log('mouseMove')
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      console.log('removeEventListener')
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
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
      variants={variants}
      animate={cursorVariant}
      hoverEnter={hoverEnter}
      hoverLeave={hoverLeave}
    />
  );
};

export default Cursor;

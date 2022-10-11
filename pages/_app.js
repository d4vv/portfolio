import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Top from '../components/top'
import Preloader from '../components/preloader'
import Favicon from 'react-favicon'

function MyApp({ Component, pageProps }) {

  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null
  });

  const [cursorVariant, setCursorVariant] = React.useState("default");

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

  const hoverEnter = () => setCursorVariant("hover");
  const hoverLeave = () => setCursorVariant("default");


  return (
    <>
      {/* <Preloader /> */}
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      <Favicon url={[
        '/images/favicon/favicon00.png',
        '/images/favicon/favicon00.png',
        '/images/favicon/favicon00.png',
        '/images/favicon/favicon01.png',
        '/images/favicon/favicon02.png',
        '/images/favicon/favicon03.png',
        '/images/favicon/favicon00.png',
        '/images/favicon/favicon04.png',
        '/images/favicon/favicon05.png',
        '/images/favicon/favicon00.png',
        '/images/favicon/favicon06.png',
        '/images/favicon/favicon07.png',
        '/images/favicon/favicon08.png',
        '/images/favicon/favicon00.png',
        '/images/favicon/favicon09.png',
        '/images/favicon/favicon10.png',
        '/images/favicon/favicon00.png',
        '/images/favicon/favicon00.png',
        '/images/favicon/favicon00.png',
        ]}
      />
      <Top hoverEnter={hoverEnter} hoverLeave={hoverLeave} />
      <AnimatePresence
        mode='wait'
        initial={false}
      >
        <Component hoverEnter={hoverEnter} hoverLeave={hoverLeave} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp

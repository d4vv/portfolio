import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Cursor from '../components/cursor'
import Top from '../components/top'
import Preloader from '../components/preloader'
import Favicon from 'react-favicon'

function MyApp({ Component, pageProps }) {

  const [cursorVariant, setCursorVariant] = React.useState("default");

  const hoverEnter = () => setCursorVariant("hover");
  const hoverLeave = () => setCursorVariant("default");

  useEffect(() => {
      document.body.className = pageProps.isLight ? 'lightMode' : 'darkMode';
  });

  const [isOpen, setOpen] = useState(false)

  const handleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Preloader />
      <Cursor
        isOpen={isOpen}
        cursorVariant={cursorVariant}
        setCursorVariant={setCursorVariant} 
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave} 
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
      <Top 
        isOpen={isOpen}
        setOpen={setOpen}
        handleNav={handleNav}
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave}
      />
      <AnimatePresence
        mode='wait'
        initial={false}
      >
        <Component
          hoverEnter={hoverEnter}
          hoverLeave={hoverLeave}
          {...pageProps}
        />
      </AnimatePresence>
    </>
  )
}

export default MyApp

import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactFullpage from '@fullpage/react-fullpage'
import SidePanel from '../../components/sidepanel'
import Arrows from '../../components/arrows'
import PortalContent from '../../components/content/PortalContent'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const Main = styled(motion.main)`
  background: var(--primaryColor);
`;

const MotionDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default function Portal({hoverEnter, hoverLeave, leftLink, rightLink}) {

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const router = useRouter()

  const xOffset = 100;

  function detectPaginationGesture(e, { offset }) {
    const threshold = xOffset / 2;
    if (offset.x < -threshold) {
      router.push('/portfolio/sxdrive')
      console.log('detectPaginationGesture')
    } else if (offset.x > threshold) {
      router.push('/portfolio/partners-portal')
      console.log('detectPaginationGesture')
    }
  }

  return (
    <>
      <Head>
        <title>Dawid Mejster</title>
        <meta name="description" content="Dawid Mejster Portfolio" />
      </Head>
      <SidePanel hoverEnter={hoverEnter} hoverLeave={hoverLeave} />
      <Main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear'  }}
      >
        <AnimatePresence>
          <MotionDiv
            drag="x"
            onDragEnd={detectPaginationGesture}
            dragMomentum={false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0  }}
          >
            <Arrows
              leftLink='/portfolio/partners-portal'
              rightLink='/portfolio/sxdrive'
              hoverEnter={hoverEnter}
              hoverLeave={hoverLeave}
            />
            <PortalContent />
          </MotionDiv>
        </AnimatePresence>
      </Main>
    </>
  )
}

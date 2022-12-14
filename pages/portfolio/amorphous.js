import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactFullpage from '@fullpage/react-fullpage'
import SidePanel from '../../components/sidepanel'
import Arrows from '../../components/arrows'
import AmorphousContent from '../../components/content/AmorphousContent'
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

export default function Amorphous({hoverEnter, hoverLeave, leftLink, rightLink}) {

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
      router.push('/portfolio/armada')
    } else if (offset.x > threshold) {
      router.push('/portfolio/zbierz-druzyne')
    }
  }

  return (
    <>
      <Head>
        <title>Dawid Mejster Portfolio - Amorphous</title>
        <meta name="description" content="Amorphous offering focuses on optimizing data placement to reduce costs and carbon footprint while maintaining adequate latency and performance." />
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
              leftLink='/portfolio/zbierz-druzyne'
              rightLink='/portfolio/armada'
              hoverEnter={hoverEnter}
              hoverLeave={hoverLeave}
            />
            <AmorphousContent
              hoverEnter={hoverEnter}
              hoverLeave={hoverLeave}
            />
          </MotionDiv>
        </AnimatePresence>
      </Main>
    </>
  )
}

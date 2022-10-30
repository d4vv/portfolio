import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactFullpage from '@fullpage/react-fullpage'
import SidePanel from '../../components/sidepanel'
import Arrows from '../../components/arrows'
import AumsContent from '../../components/content/AumsContent'
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

export async function getStaticProps() {
    return { props: { isLight: true } };
}

export default function Aums({hoverEnter, hoverLeave, leftLink, rightLink}) {

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
      router.push('/portfolio/partners-portal')
    } else if (offset.x > threshold) {
      router.push('/portfolio/armada')
    }
  }

  return (
    <>
      <Head>
        <title>Dawid Mejster Portfolio - AUMS</title>
        <meta name="description" content="Asseco Utility Management Solutions is a suite of IT systems designed for the utility sector. These products support all areas of the sector’s activities, which include not only generation, transmission, distribution and sales, but also the latest market trends such as electromobility and energy efficiency." />
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
              leftLink='/portfolio/armada'
              rightLink='/portfolio/partners-portal'
              hoverEnter={hoverEnter}
              hoverLeave={hoverLeave}
            />
            <AumsContent />
          </MotionDiv>
        </AnimatePresence>
      </Main>
    </>
  )
}

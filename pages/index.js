import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import ReactFullpage from '@fullpage/react-fullpage'
import SidePanel from '../components/sidepanel'
import Arrows from '../components/arrows'
import AmorphousContent from '../components/content/AmorphousContent'
import styled from 'styled-components'

const Main = styled(motion.main)`
  background: var(--primaryColor);
`;

const MotionDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'DK7G7-2CR78-CKD87-JI966-TVYXN'}
    scrollingSpeed = {700}
    controlArrows = {true}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="imageContainer">
              <Image
                className="image"
                src="/images/photo.png"
                alt="Picture of the author"
                layout="fill"
              />
            </div>
          </div>
          <div className="section">
            <div className="imageContainer">
              <Image
                className="image"
                src="/images/photo.png"
                alt="Picture of the author"
                layout="fill"
              />
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default function Home({hoverEnter, hoverLeave}) {

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
      console.log('detectPaginationGesture')
    } else if (offset.x > threshold) {
      router.push('/portfolio/zbierz-druzyne')
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
              leftLink='/portfolio/zbierz-druzyne'
              rightLink='/portfolio/armada'
              hoverEnter={hoverEnter}
              hoverLeave={hoverLeave}
            />
            <AmorphousContent />
          </MotionDiv>
        </AnimatePresence>
      </Main>
    </>
  )
}

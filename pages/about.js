import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import Marquee from "react-fast-marquee"
import { useInView } from 'react-intersection-observer';


const paths = keyframes`
  0% {
    clip-path: polygon( 0% 43%, 83% 43%, 83% 22%, 23% 22%, 23% 24%, 91% 24%, 91% 26%,
    18% 26%, 18% 83%, 29% 83%, 29% 17%, 41% 17%, 41% 39%, 18% 39%, 18% 82%, 54% 82%,
    54% 88%, 19% 88%, 19% 4%, 39% 4%, 39% 14%, 76% 14%, 76% 52%, 23% 52%, 23% 35%,
    19% 35%, 19% 8%, 36% 8%, 36% 31%, 73% 31%, 73% 16%, 1% 16%, 1% 56%, 50% 56%, 50% 8%
    );
  }

  5% {
    clip-path: polygon( 0% 29%, 44% 29%, 44% 83%, 94% 83%, 94% 56%, 11% 56%, 11% 64%,
    94% 64%, 94% 70%, 88% 70%, 88% 32%, 18% 32%, 18% 96%, 10% 96%, 10% 62%, 9% 62%,
    9% 84%, 68% 84%, 68% 50%, 52% 50%, 52% 55%, 35% 55%, 35% 87%, 25% 87%, 25% 39%,
    15% 39%, 15% 88%, 52% 88%);
  }

  30% {
    clip-path: polygon( 0% 53%, 93% 53%, 93% 62%, 68% 62%, 68% 37%, 97% 37%, 97% 89%,
    13% 89%, 13% 45%, 51% 45%, 51% 88%, 17% 88%, 17% 54%, 81% 54%, 81% 75%, 79% 75%,
    79% 76%, 38% 76%, 38% 28%, 61% 28%, 61% 12%, 55% 12%, 55% 62%, 68% 62%, 68% 51%,
    0% 51%, 0% 92%, 63% 92%, 63% 4%, 65% 4%);
  }

  45% {
    clip-path: polygon( 0% 33%, 2% 33%, 2% 69%, 58% 69%, 58% 94%, 55% 94%, 55% 25%,
    33% 25%, 33% 85%, 16% 85%, 16% 19%, 5% 19%, 5% 20%, 79% 20%, 79% 96%, 93% 96%,
    93% 50%, 5% 50%, 5% 74%, 55% 74%, 55% 57%, 96% 57%, 96% 59%, 87% 59%, 87% 65%,
    82% 65%, 82% 39%, 63% 39%, 63% 92%, 4% 92%, 4% 36%, 24% 36%, 24% 70%, 1% 70%,
    1% 43%, 15% 43%, 15% 28%, 23% 28%, 23% 71%, 90% 71%, 90% 86%, 97% 86%, 97% 1%,
    60% 1%, 60% 67%, 71% 67%, 71% 91%, 17% 91%, 17% 14%, 39% 14%, 39% 30%, 58% 30%,
    58% 11%, 52% 11%, 52% 83%, 68% 83%);
  }

  76% {
    clip-path: polygon( 0% 26%, 15% 26%, 15% 73%, 72% 73%, 72% 70%, 77% 70%, 77% 75%,
    8% 75%, 8% 42%, 4% 42%, 4% 61%, 17% 61%, 17% 12%, 26% 12%, 26% 63%, 73% 63%,
    73% 43%, 90% 43%, 90% 67%, 50% 67%, 50% 41%, 42% 41%, 42% 46%, 50% 46%, 50% 84%,
    96% 84%, 96% 78%, 49% 78%, 49% 25%, 63% 25%, 63% 14%);
  }

  90% {
    clip-path: polygon( 0% 41%, 13% 41%, 13% 6%, 87% 6%, 87% 93%, 10% 93%, 10% 13%,
    89% 13%, 89% 6%, 3% 6%, 3% 8%, 16% 8%, 16% 79%, 0% 79%, 0% 99%, 92% 99%,
    92% 90%, 5% 90%, 5% 60%, 0% 60%, 0% 48%, 89% 48%, 89% 13%, 80% 13%, 80% 43%,
    95% 43%, 95% 19%, 80% 19%, 80% 85%, 38% 85%, 38% 62%);
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    clip-path: none;
  }
`;

const pathsTwo = keyframes`
  0% {
    clip-path: polygon(0% 7%,53% 7%,53% 4%,62% 4%,62% 91%,44% 91%,44% 3%,78% 3%,78% 24%,
    84% 24%,84% 23%,89% 23%,89% 96%,95% 96%,95% 35%,90% 35%,90% 98%,96% 98%,96% 24%,
    38% 24%,38% 32%,9% 32%,9% 24%,91% 24%,91% 92%,5% 92%,5% 60%,54% 60%,54% 65%,
    89% 65%,89% 60%,78% 60%,78% 8%,40% 8%,40% 81%,90% 81%,90% 46%,9% 46%,9% 59%,
    16% 59%,16% 57%,64% 57%,64% 85%,44% 85%,44% 35%,36% 35%,36% 21%,65% 21%,65% 61%,
    50% 61%,50% 25%,27% 25%) 
    );
  }

  5% {
    clip-path: polygon(0% 64%,93% 64%,93% 60%,99% 60%,99% 52%,44% 52%,44% 45%,
    79% 45%,79% 3%,53% 3%,53% 16%,70% 16%,70% 65%,9% 65%,9% 22%,33% 22%,33% 63%,
    72% 63%,72% 59%,23% 59%,23% 19%,3% 19%,3% 79% );
  }

  30% {
    clip-path: polygon( 0% 16%,94% 16%,94% 37%,66% 37%,66% 64%,48% 64%,48% 83%,
    75% 83%,75% 71%,37% 71%,37% 83%,47% 83%,47% 65%,18% 65%,18% 24%,16% 24%,
    16% 26%,50% 26%,50% 43%,7% 43%,7% 95%,55% 95%,55% 27%,5% 27%,5% 54%,53% 54%,
    53% 90%,83% 90%,83% 13%,82% 13%,82% 49%,49% 49%,49% 1%,45% 1%,45% 60%,75% 60%,
    75% 26%,68% 26%,68% 55%,28% 55%,28% 84%,59% 84%,59% 64%,9% 64%,9% 78%,64% 78%,
    64% 53%,0% 53%,0% 54%,60% 54%,60% 38%,50% 38%,50% 5% );
  }

  45% {
    clip-path: polygon( 0% 56%,79% 56%,79% 29%,43% 29%,43% 53%,64% 53%,64% 73%,
    22% 73%,22% 25%,16% 25%,16% 90%,0% 90%,0% 96%,63% 96%,63% 99%,83% 99%,
    83% 79%,90% 79%,90% 37%,85% 37%,85% 18%,88% 18%,88% 44%,52% 44%,52% 78%,
    49% 78%,49% 66%,56% 66%,56% 14%,46% 14%,46% 65%,62% 65%,62% 84%,0% 84%,
    0% 48%,51% 48% );
  }

  76% {
    clip-path: polygon( 0% 79%,97% 79%,97% 92%,94% 92%,94% 85%,2% 85%,2% 22%,
    17% 22%,17% 21%,35% 21%,35% 6%,79% 6%,79% 91%,38% 91%,38% 59%,73% 59%,
    73% 82%,29% 82%,29% 79%,18% 79%,18% 25%,14% 25%,14% 71%,48% 71%,48% 23%,
    76% 23%,76% 26%,79% 26%,79% 29%,4% 29%,4% 76%,62% 76%,62% 96%,63% 96%,
    63% 51%,73% 51%,73% 64%,80% 64%,80% 9%,49% 9%,49% 32%,76% 32%,76% 85%,6% 85%,
    6% 82%,66% 82%,66% 89%,5% 89%,5% 69%,71% 69%,71% 64%,39% 64%,39% 21%,
    9% 21%,9% 25%,88% 25%,88% 0% );
  }

  90% {
    clip-path: polygon( 0% 50%,53% 50%,53% 59%,74% 59%,74% 40%,39% 40%,39% 0%,13% 0%,
    13% 17%,41% 17%,41% 57%,67% 57%,67% 89%,37% 89%,37% 19%,58% 19%,58% 35%,22% 35%,
    22% 18%,22% 18%,22% 76%,76% 76%,76% 80%,36% 80%,36% 26%,22% 26%,22% 43%,18% 43%,
    18% 14%,51% 14%,51% 84%,87% 84%,87% 68%,87% 68%,87% 96%,62% 96%,62% 75%,88% 75%,
    88% 23%,57% 23%,57% 13%,82% 13%,82% 59%,49% 59%,49% 92%,10% 92%,10% 50%,
    44% 50%,44% 83%,8% 83%,8% 27%,37% 27%,37% 30%,51% 30%,51% 96%,74% 96%,74% 42%,
    61% 42%,61% 99% );
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    clip-path: none;
  }
`;

const movement = keyframes`
  0% {
    top: 0px;
    left: -20px;
  }

  15% {
    top: 10px;
    left: 10px;
  }

  60% {
    top: 5px;
    left: -10px;
  }

  75% {
    top: -5px;
    left: 20px;
  }

  100% {
    top: 10px;
    left: 5px;
  }
`;

const movementTwo = keyframes`
  0% {
    top: 0px;
    left: 20px;
  }

  15% {
    top: -10px;
    left: -10px;
  }

  60% {
    top: -5px;
    left: 10px;
  }

  75% {
    top: -5px;
    left: 10px;
  }

  100% {
    top: 5px;
    left: 10px;
  }
`;

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

const Main = styled(motion.main)`
  padding: 10% 10% 0 10%;
  background: var(--primaryColor);
`;

const MainAbout = styled.section`
  padding-bottom: 8rem;
`;

const AboutLeft = styled.div`
  width: 55%;
  margin-top: 8rem;
`;

const AboutRight = styled.div`
  width: 40%;
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AboutInner = styled.div`
  width: 100%;
`;

const Title = styled.h1`
`;

const AboutText = styled.article`
  font-size: 1.6875rem;
  line-height: 2.5rem;
  overflow: hidden;
`;

const ParAnimation = keyframes`
  0% {
    left: -100%;
  }

  100% {
    left: 0;
  }
`;

const Par = styled.p`
  position: relative;
  margin-top: 0;
  margin-bottom: 1rem;
  left: -100%;
  animation: ${ParAnimation} 2s var(--primary-curve) forwards;

  &:last-child {
    margin-bottom: 0;
  }
`;

const animateHeight = keyframes`
  0% {
    bottom: -100%;
  }

  100% {
    bottom: 0;
  }
`;

const PhotoContainer = styled.div`
  height: 90vh;
`;

const AboutPhotoWrapper = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  overflow: hidden;
`;

const AboutPhotoInner = styled.span`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
  bottom: -100%;
  animation: ${animateHeight} 2s var(--primary-curve) forwards;
`;

const AboutPhoto = styled(Image)`
  animation: ${pathsTwo} 4s step-end infinite, ${movementTwo} 4s step-end infinite; 
  opacity: .6;
`;

  const StyledMarquee = styled(Marquee)`
  width: 100%;
  color: var(--accentColor);
  z-index: 0;
`;

const MarqueeText = styled.p`
  margin: 0;
  font-size: 7rem;
  width: 100%;
  color: var(--marqueeColor);
  z-index: 0;
  display: flex;
  align-items: center;
`;

const Bullet = styled.span`
  height: 12px;
  width: 12px;
  display: inline-block;
  background: var(--marqueeColor);
  border-radius: 100%;
  margin: 0 2rem;
`;

const MainExp = styled.section`
  padding-top: 8rem;
`;

const ParExp = styled.p`
  position: relative;
  margin-top: 0;
  margin-bottom: 1rem;
  left: -100%;

  ${MainExp}.-active & {
    animation: ${ParAnimation} 2s var(--primary-curve) forwards;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ExpLeft = styled.div`
  width: 40%;
`;

const ExpRight = styled.div`
  width: 55%;
  margin-top: 5rem;
`;

const ExpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExpInner = styled.div`
`;

const ExpTitle = styled.h2`
`;

const ExpText = styled.article`
  overflow: hidden;
  font-size: 1.6875rem;
  line-height: 2.5rem;
`;

const ExpPhotoWrapper = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  overflow: hidden;
`;

const ExpPhotoInner = styled.span`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
  bottom: -100%;

  ${MainExp}.-active & {
    animation: ${animateHeight} 2s var(--primary-curve) forwards;
  }
`;

const ExpPhoto = styled(Image)`
  animation: ${pathsTwo} 4s step-end infinite, ${movementTwo} 4s step-end infinite; 
  opacity: .6;
`;

const Word = styled.span`
  position: relative;
  font-size: 7rem;
  line-height: .875;
  text-transform: uppercase;
  left: -10px;
`;

const WordFull = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`;

const WordLetterHidden = styled.span.attrs({
  'aria-hidden': 'true',
})`
  opacity: 0;
`;

const DawidLetters = styled.span.attrs({
  'aria-hidden': 'true',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
  clip-path: inset(0 0 3.5rem);
  z-index: 1;

  & > span:nth-child(1) {
    left: 0;
    animation-delay: 0.46s;
  }

  & > span:nth-child(2) {
    left: 4.77rem;
    animation-delay: 0.53s;
  }

  & > span:nth-child(3) {
    left: 9.3rem;
    animation-delay: 0.6s;
  }

  & > span:nth-child(4) {
    left: 15.95rem;
    animation-delay: 0.67s;
  }

  & > span:nth-child(5) {
    left: 17.7rem;
    animation-delay: 0.74s;
  }
`;

const lettersArrive = keyframes`
    to {
        transform: var(--base-translate3d)
    }
}`;

const DawidLetter = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  animation: ${lettersArrive} 1.25s var(--primary-curve) forwards;
  will-change: transform;
  transform: translate3d(0,110%,0);
`;

const MejsterLetters = styled.span.attrs({
  'aria-hidden': 'true',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
  clip-path: inset(0 0 3.5rem);
  z-index: 1;

  & > span:nth-child(1) {
    left: 0;
    animation-delay: 0.46s;
  }

  & > span:nth-child(2) {
    left: 6.1rem;
    animation-delay: 0.53s;
  }

  & > span:nth-child(3) {
    left: 10.585rem;
    animation-delay: 0.6s;
  }

  & > span:nth-child(4) {
    left: 14.4rem;
    animation-delay: 0.67s;
  }

  & > span:nth-child(5) {
    left: 18.95rem;
    animation-delay: 0.74s;
  }

  & > span:nth-child(6) {
    left: 23.46rem;
    animation-delay: 0.81s;
  }

  & > span:nth-child(7) {
    left: 28.1rem;
    animation-delay: 0.88s;
  }
`;

const MejsterLetter = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  will-change: transform;
  transform: translate3d(0,110%,0);
  animation: ${lettersArrive} 1.25s var(--primary-curve) forwards;
`;

const CreativeLetter = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  will-change: transform;
  transform: translate3d(0,110%,0);

  ${MainExp}.-active & {
    animation-name: ${lettersArrive};
    animation-duration: 1.25s;
    animation-timing-function: var(--primary-curve);
    animation-fill-mode: forwards;
  }
`;

const CreativeLetters = styled.span.attrs({
  'aria-hidden': 'true',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
  clip-path: inset(0 0 3.5rem);
  z-index: 1;

  & > span:nth-child(1) {
    left: 0;
    animation-delay: 0.46s;
  }

  & > span:nth-child(2) {
    left: 5.07rem;
    animation-delay: 0.53s;
  }

  & > span:nth-child(3) {
    left: 10.09rem;
    animation-delay: 0.6s;
  }

  & > span:nth-child(4) {
    left: 14.735rem;
    animation-delay: 0.67s;
  }

  & > span:nth-child(5) {
    left: 19.09rem;
    animation-delay: 0.74s;
  }

  & > span:nth-child(6) {
    left: 23.59rem;
    animation-delay: 0.81s;
  }

  & > span:nth-child(7) {
    left: 25.37rem;
    animation-delay: 0.88s;
  }

  & > span:nth-child(8) {
    left: 30.07rem;
    animation-delay: 0.95s;
  }
`;

const MindLetter = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  will-change: transform;
  transform: translate3d(0,110%,0);

  ${MainExp}.-active & {
    animation-name: ${lettersArrive};
    animation-duration: 1.25s;
    animation-timing-function: var(--primary-curve);
    animation-fill-mode: forwards;
  }
`;

const MindLetters = styled.span.attrs({
  'aria-hidden': 'true',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
  clip-path: inset(0 0 3.5rem);
  z-index: 1;

  & > span:nth-child(1) {
    left: 0;
    animation-delay: 0.46s;
  }

  & > span:nth-child(2) {
    left: 6.1rem;
    animation-delay: 0.53s;
  }

  & > span:nth-child(3) {
    left: 7.87rem;
    animation-delay: 0.6s;
  }

  & > span:nth-child(4) {
    left: 13.05rem;
    animation-delay: 0.67s;
  }
`;

const MainSomeClients = styled.section`
  padding-top: 16rem;
  margin-bottom: 8rem;
`;

const SomeClientsWrapper = styled.div`
`;

const SomeClientsInner = styled.div`
`;

const SomeLetter = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  will-change: transform;
  transform: translate3d(0,110%,0);

  ${MainSomeClients}.-active & {
    animation-name: ${lettersArrive};
    animation-duration: 1.25s;
    animation-timing-function: var(--primary-curve);
    animation-fill-mode: forwards;
  }
`;

const SomeLetters = styled.span.attrs({
  'aria-hidden': 'true',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
  clip-path: inset(0 0 3.5rem);
  z-index: 1;

  & > span:nth-child(1) {
    left: 0;
    animation-delay: 0.46s;
  }

  & > span:nth-child(2) {
    left: 4.6rem;
    animation-delay: 0.53s;
  }

  & > span:nth-child(3) {
    left: 10.2rem;
    animation-delay: 0.6s;
  }

  & > span:nth-child(4) {
    left: 16.4rem;
    animation-delay: 0.67s;
  }
`;

const ClientsLetter = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  will-change: transform;
  transform: translate3d(0,110%,0);

  ${MainSomeClients}.-active & {
    animation-name: ${lettersArrive};
    animation-duration: 1.25s;
    animation-timing-function: var(--primary-curve);
    animation-fill-mode: forwards;
  }
`;

const ClientsLetters = styled.span.attrs({
  'aria-hidden': 'true',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
  clip-path: inset(0 0 3.5rem);
  z-index: 1;

  & > span:nth-child(1) {
    left: 0;
    animation-delay: 0.46s;
  }

  & > span:nth-child(2) {
    left: 5.07rem;
    animation-delay: 0.53s;
  }

  & > span:nth-child(3) {
    left: 9.26rem;
    animation-delay: 0.6s;
  }

  & > span:nth-child(4) {
    left: 11.02rem;
    animation-delay: 0.67s;
  }

  & > span:nth-child(5) {
    left: 15.69rem;
    animation-delay: 0.74s;
  }

  & > span:nth-child(6) {
    left: 20.84rem;
    animation-delay: 0.81s;
  }

  & > span:nth-child(7) {
    left: 25.05rem;
    animation-delay: 0.88s;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: .5;
  }
`;

const ClientsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 4rem 0 0 0;
  padding: 0;
  row-gap: 2rem;
  column-gap: 2rem;
  align-items: center;

  & > li:nth-child(1) {
    animation-delay: 0.46s;
  }

  & > li:nth-child(2) {
    height: 6rem;
    animation-delay: 0.60s;
  }

  & > li:nth-child(3) {
    animation-delay: 0.74s;
  }

  & > li:nth-child(4) {
    height: 4rem;
    animation-delay: 0.88s;
  }

  & > li:nth-child(5) {
    animation-delay: 1.02s;
  }

  & > li:nth-child(6) {
    animation-delay: 1.16s;
  }

  & > li:nth-child(7) {
    height: 5rem;
    animation-delay: 1.30s;
  }

  & > li:nth-child(8) {
    height: 6rem;
    animation-delay: 1.44s;
  }

  & > li:nth-child(9) {
    animation-delay: 1.58s;
  }

  & > li:nth-child(10) {
    animation-delay: 1.72s;
  }

  & > li:nth-child(11) {
    animation-delay: 1.86s;
  }

  & > li:nth-child(12) {
    height: 4rem;
    animation-delay: 2s;
  }
`;

const Client = styled.li`
  position: relative;
  height: 3rem;
  width: 100%;
  opacity: 0;

  ${MainSomeClients}.-active & {
    animation-name: ${FadeIn};
    animation-duration: 1.25s;
    animation-timing-function: var(--primary-curve);
    animation-fill-mode: forwards;
  }
`;


export default function About() {

  const [ ref, inView ] = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 500
  });

  const [ ref2, inView2 ] = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 500
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear'  }}
      >
        <MainAbout>
          <AboutWrapper>
            <AboutLeft>
            <AboutInner>
              <Title>
                <Word>
                  <WordFull>Dawid</WordFull>
                  <WordLetterHidden>D</WordLetterHidden>
                  <WordLetterHidden>a</WordLetterHidden>
                  <WordLetterHidden>w</WordLetterHidden>
                  <WordLetterHidden>i</WordLetterHidden>
                  <WordLetterHidden>d</WordLetterHidden>
                  <DawidLetters>
                    <DawidLetter>D</DawidLetter>
                    <DawidLetter>a</DawidLetter>
                    <DawidLetter>w</DawidLetter>
                    <DawidLetter>i</DawidLetter>
                    <DawidLetter>d</DawidLetter>
                  </DawidLetters>
                </Word><br/>
                <Word>
                  <WordFull>Mejster</WordFull>
                  <WordLetterHidden>M</WordLetterHidden>
                  <WordLetterHidden>e</WordLetterHidden>
                  <WordLetterHidden>j</WordLetterHidden>
                  <WordLetterHidden>s</WordLetterHidden>
                  <WordLetterHidden>t</WordLetterHidden>
                  <WordLetterHidden>e</WordLetterHidden>
                  <WordLetterHidden>r</WordLetterHidden>
                  <MejsterLetters>
                    <MejsterLetter>M</MejsterLetter>
                    <MejsterLetter>e</MejsterLetter>
                    <MejsterLetter>j</MejsterLetter>
                    <MejsterLetter>s</MejsterLetter>
                    <MejsterLetter>t</MejsterLetter>
                    <MejsterLetter>e</MejsterLetter>
                    <MejsterLetter>r</MejsterLetter>
                  </MejsterLetters>
                </Word>
              </Title>
              <AboutText>
                <Par>{"Hi there! Thanks for stopping by my portfolio."}<br/>{"I'm a UI/UX Designer located in Torun, Poland working remotely for clients nationally and internationally. My goal is to understand people, solve problems, and craft meaningful and delightful designs and experiences. I love software, it's in my blood, it's in my veins it's what I live and breath."}</Par>
              </AboutText>
            </AboutInner>
            </AboutLeft>
              <AboutRight>
            <PhotoContainer>
            <AboutPhotoWrapper>
                <AboutPhotoInner>
                  <AboutPhoto 
                    src="/images/about-1.jpg"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top center"
                    priority
                  />
              </AboutPhotoInner>
            </AboutPhotoWrapper>
            </PhotoContainer>
          </AboutRight>
          </AboutWrapper>
        </MainAbout>

        <StyledMarquee gradientColor={[17, 18, 24]}>
          <MarqueeText>UI Designer <Bullet /> UX Designer <Bullet />  Digital Artist <Bullet /> Graphic Designer <Bullet /> 3D Artist <Bullet /></MarqueeText>
        </StyledMarquee>

        <MainExp ref={ref} className={inView ? '-active' : null}>
          <ExpWrapper>
            <ExpLeft>
            <ExpPhotoWrapper>
              <ExpPhotoInner>
                <ExpPhoto 
                  src="/images/about-2.jpg"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center"
                  priority
                />
              </ExpPhotoInner>
            </ExpPhotoWrapper>
            </ExpLeft>
            <ExpRight>
              <ExpInner>
                <Title>
                  <Word>
                    <WordFull>Creative</WordFull>
                    <WordLetterHidden>C</WordLetterHidden>
                    <WordLetterHidden>r</WordLetterHidden>
                    <WordLetterHidden>e</WordLetterHidden>
                    <WordLetterHidden>a</WordLetterHidden>
                    <WordLetterHidden>t</WordLetterHidden>
                    <WordLetterHidden>i</WordLetterHidden>
                    <WordLetterHidden>v</WordLetterHidden>
                    <WordLetterHidden>e</WordLetterHidden>
                    <CreativeLetters>
                      <CreativeLetter>C</CreativeLetter>
                      <CreativeLetter>r</CreativeLetter>
                      <CreativeLetter>e</CreativeLetter>
                      <CreativeLetter>a</CreativeLetter>
                      <CreativeLetter>t</CreativeLetter>
                      <CreativeLetter>i</CreativeLetter>
                      <CreativeLetter>v</CreativeLetter>
                      <CreativeLetter>e</CreativeLetter>
                    </CreativeLetters>
                  </Word><br/>
                  <Word>
                    <WordFull>Mind</WordFull>
                    <WordLetterHidden>M</WordLetterHidden>
                    <WordLetterHidden>i</WordLetterHidden>
                    <WordLetterHidden>n</WordLetterHidden>
                    <WordLetterHidden>d</WordLetterHidden>
                    <MindLetters>
                      <MindLetter>M</MindLetter>
                      <MindLetter>i</MindLetter>
                      <MindLetter>n</MindLetter>
                      <MindLetter>d</MindLetter>
                    </MindLetters>
                  </Word>
                </Title>
                <ExpText>
                  <ParExp>{"I'm a creative designer with years of experience in building products and appealing web experiences. Each project is an opportuinity to learn new concepts across multiple domains."}</ParExp>
                  <ParExp>{"If you want somebody who will find the best possible way to get from A to B and Z and also vision cast and think big outside of the box and challenge yours preconceived notions then I might be the creative for you."}</ParExp>
                </ExpText>
              </ExpInner>
            </ExpRight>
          </ExpWrapper>
        </MainExp>

        <MainSomeClients ref={ref2} className={inView2 ? '-active' : null}>
          <SomeClientsWrapper>
              <SomeClientsInner>
                <Title>
                  <Word>
                    <WordFull>Some</WordFull>
                    <WordLetterHidden>S</WordLetterHidden>
                    <WordLetterHidden>o</WordLetterHidden>
                    <WordLetterHidden>m</WordLetterHidden>
                    <WordLetterHidden>e</WordLetterHidden>
                    <SomeLetters>
                      <SomeLetter>S</SomeLetter>
                      <SomeLetter>o</SomeLetter>
                      <SomeLetter>m</SomeLetter>
                      <SomeLetter>e</SomeLetter>
                    </SomeLetters>
                  </Word><br/>
                  <Word>
                    <WordFull>Clients</WordFull>
                    <WordLetterHidden>C</WordLetterHidden>
                    <WordLetterHidden>l</WordLetterHidden>
                    <WordLetterHidden>i</WordLetterHidden>
                    <WordLetterHidden>e</WordLetterHidden>
                    <WordLetterHidden>n</WordLetterHidden>
                    <WordLetterHidden>t</WordLetterHidden>
                    <WordLetterHidden>s</WordLetterHidden>
                    <ClientsLetters>
                      <ClientsLetter>C</ClientsLetter>
                      <ClientsLetter>l</ClientsLetter>
                      <ClientsLetter>i</ClientsLetter>
                      <ClientsLetter>e</ClientsLetter>
                      <ClientsLetter>n</ClientsLetter>
                      <ClientsLetter>t</ClientsLetter>
                      <ClientsLetter>s</ClientsLetter>
                    </ClientsLetters>
                  </Word>
                </Title>
                <ClientsList>
                  <Client>
                    <Image
                      src="/images/client-rstor.svg"
                      alt="RSTOR Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-rkb.svg"
                      alt="RKB Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-sabre.svg"
                      alt="RKB Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-packetfabric.svg"
                      alt="RKB Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-amorphous.svg"
                      alt="RKB Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-asseco.svg"
                      alt="Asseco Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-skylable.svg"
                      alt="Skylable Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-itwl.svg"
                      alt="ITWL Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-dorsal.svg"
                      alt="Dorsal Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-bdroix.svg"
                      alt="Bdroix Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-globedata.svg"
                      alt="Globedata Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                  <Client>
                    <Image
                      src="/images/client-asprodukt.svg"
                      alt="AS Produkt Logo"
                      objectFit='contain'
                      objectPosition="center"
                      layout="fill"
                    />
                  </Client>
                </ClientsList>
              </SomeClientsInner>
          </SomeClientsWrapper>
        </MainSomeClients>
      </Main>
    </>
  )
}

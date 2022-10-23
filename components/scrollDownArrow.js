import { useEffect } from 'react'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import arrowSvg from './arrowSvg'

const scrollDown = keyframes`
  0% {
    bottom: 12%;
  }

  20% {
    bottom: 8%;
  }

  40% {
    bottom: 12%;
  }

  60% {
    bottom: 8%;
  }

  80% {
    bottom: 12%;
    opacity: 1;
  }

  100% {
    bottom: 8%;
    opacity: 0;
  }
`;

const ArrowWrapper = styled.span`
  animation: ${scrollDown} 4s ease-in-out forwards;
  transform: rotate(-90deg);
  z-index: 1000;
  position: fixed;
  bottom: 12%;
  left: 50%;
  pointer-events: visible;
  background: none;
  border: 0;
  height: 2rem;
`;

const Arrow = styled(arrowSvg)`
  z-index: 2;
  height: 100%;
  width: auto;
  margin-right: 2rem;
  fill: var(--secondaryColor);
  transition: all .5s;

  body.lightMode & {
    fill: var(--primaryColor);
    transition: all .5s;
  }
`;

const Section = styled.div`
  pointer-events: none;
`;

const MotionImage = styled.div`
  pointer-events: none;
`;

const ScrollDownArrow = ({ hoverEnter, hoverLeave }) => {

  useEffect(() => {
    let arrow = document.getElementById("arrow");
    if (arrow) {
      setTimeout(function () {
        arrow.remove();
      }, 6000);
    }
  });

  return (
    <>
      <ArrowWrapper
        id='arrow'
      >
        <Arrow
          onMouseEnter={hoverEnter}
          onMouseLeave={hoverLeave}
          viewBox="0 0 103 200"
        >
          <g>
            <polygon points="99.5,200 0,100 99.5,0 103,3.6 7.1,100 103,196.4"/>
          </g>
        </Arrow>
      </ArrowWrapper>
    </>
  )
}

export default ScrollDownArrow;


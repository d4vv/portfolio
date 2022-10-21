import { useEffect } from 'react'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

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
  animation: ${scrollDown} 5s ease-in-out 1s forwards;
  transform: rotate(-90deg);
  z-index: 1000;
  position: fixed;
  bottom: 10%;
  left: 50%;
  pointer-events: visible;
  background: none;
  border: 0;
`;

const Arrow = styled(Image)`
`;

const Section = styled.div`
  pointer-events: none;
`;

const MotionImage = styled.div`
  pointer-events: none;
`;

const ScrollDownArrow = () => {

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
          src='/images/arrow.svg'
          alt='Arrow'
          width={15}
          height={30}
        />
      </ArrowWrapper>
    </>
  )
}

export default ScrollDownArrow;


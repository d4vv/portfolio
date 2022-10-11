import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const ArrowLeftWrapper = styled.div`
  position: fixed;
  top: 50%;
  margin-top: -100px;
  left: 5%;
  z-index: 1;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 0 5% 0 0;
  transition: all .3s ease-in-out;

  &:hover {
    opacity: 1;
    transition: all .3s ease-in-out;
  }
`;

const ArrowRightWrapper = styled.div`
  position: fixed;
  top: 50%;
  margin-top: -100px;
  right: 5%;
  z-index: 1502;
  transform: rotate(180deg);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 0 5% 0 0;
  transition: all .3s ease-in-out;

  &:hover {
    opacity: 1;
    transition: all .3s ease-in-out;
  }
`;

const ArrowInner = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowLeft = styled(Image)`
  object-fit: contain;
  z-index: 2;
`;

const ArrowRight = styled(Image)`
  object-fit: contain;
  z-index: 2;
`;

const ArrowTriggerLeft = styled.div`
  position: fixed;
  height: 100vh;
  width: 20rem;
  left: 7%;
  z-index: 1;
`;

const ArrowTriggerRight = styled.div`
  position: fixed;
  height: 100vh;
  width: 20rem;
  left: 25px;
  z-index: 1;
`;

const Arrows = ({ leftLink, rightLink, hoverEnter, hoverLeave }) => {

  return (
    <>
      <Link href={leftLink}>
        <ArrowLeftWrapper>
          <ArrowInner>
            <ArrowLeft
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              src='/images/arrow.svg'
              alt='Arrow'
              width={25}
              height={50}
            />
            <ArrowTriggerLeft />
          </ArrowInner>
        </ArrowLeftWrapper>
      </Link>
      <Link href={rightLink}>
        <ArrowRightWrapper>
          <ArrowInner>
            <ArrowRight
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              src='/images/arrow.svg'
              alt='Arrow'
              width={25}
              height={50}
            />
            <ArrowTriggerRight />
          </ArrowInner>
        </ArrowRightWrapper>
      </Link>
    </>
  );
};

export default Arrows;

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import arrowSvg from './arrowSvg'

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
  height: 3rem;
`;

const ArrowLeft = styled(arrowSvg)`
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

const ArrowRight = styled(arrowSvg)`
  height: 100%;
  width: auto;
  margin-right: 2rem;
  fill: var(--secondaryColor);
  z-index: 2;
  transition: all .5s;

  body.lightMode & {
    fill: var(--primaryColor);
    transition: all .5s;
  }
`;

const Arrows = ({ leftLink, rightLink, hoverEnter, hoverLeave }) => {

  return (
    <>
      <Link className='arrowLink' href={leftLink}>
        <ArrowLeftWrapper>
          <ArrowInner>
            {/* <ArrowLeft */}
            {/*   onMouseEnter={hoverEnter} */}
            {/*   onMouseLeave={hoverLeave} */}
            {/*   src='/images/arrow.svg' */}
            {/*   alt='Arrow' */}
            {/*   width={25} */}
            {/*   height={50} */}
            {/* /> */}
            <ArrowLeft
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              viewBox="0 0 103 200"
            >
              <g>
                <polygon points="99.5,200 0,100 99.5,0 103,3.6 7.1,100 103,196.4"/>
              </g>
            </ArrowLeft>
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
              viewBox="0 0 103 200"
            >
              <g>
                <polygon points="99.5,200 0,100 99.5,0 103,3.6 7.1,100 103,196.4"/>
              </g>
            </ArrowRight>
            <ArrowTriggerRight />
          </ArrowInner>
        </ArrowRightWrapper>
      </Link>
    </>
  );
};

export default Arrows;

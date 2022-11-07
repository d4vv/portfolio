import Image from 'next/image'
import Link from 'next/link'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import ScrollDownArrow from '../scrollDownArrow'
import ZbierzDruzyneImage_1 from '../../public/images/projects/zbierz-druzyne/Project.jpg'

const Section = styled.div`
  pointer-events: none;
`;

const MotionImage = styled.div`
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: relative;

  span {
    position: static!important;
  }

  img {
    height: auto!important;
    width: 100%!important;
    position: relative!important;
  }
`;

const ZbierzDruzyneContent = () => (
  <>
    <Section className="section">
      <ScrollDownArrow/>
      <MotionImage>
        <Image
          className="imageNew"
          src={ZbierzDruzyneImage_1}
          alt="Zbierz druzyne Project 1"
          layout='fill'
          placeholder="blur"
        />
      </MotionImage>
    </Section>
  </>
);

export default ZbierzDruzyneContent;

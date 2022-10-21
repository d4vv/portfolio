import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'

const Section = styled.div`
  pointer-events: none;
`;

const MotionImage = styled.div`
  pointer-events: none;
`;

const AmorphousContent = () => (

  <ReactFullpage
    //fullpage options
    licenseKey = {'DK7G7-2CR78-CKD87-JI966-TVYXN'}
    scrollingSpeed = {700}
    controlArrows = {true}

    render={({ state, fullpageApi }) => {

      return (
        <ReactFullpage.Wrapper>
          <Section className="section">
            <MotionImage
              className="imageContainer">
              <Image
                className="image"
                src="/images/projects/amorphous/Amorphous_1.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
              />
            </MotionImage>
          </Section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default AmorphousContent;

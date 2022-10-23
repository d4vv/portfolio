import Image from 'next/image'
import Link from 'next/link'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import ScrollDownArrow from '../scrollDownArrow'
import PartnersPortalImage_1 from '../../public/images/projects/partners-portal/Partners-portal_1.jpg'

const Section = styled.div`
  pointer-events: none;
`;

const MotionImage = styled.div`
  pointer-events: none;
`;

const PartnersPortalContent = () => (

  <ReactFullpage
    //fullpage options
    licenseKey = {'DK7G7-2CR78-CKD87-JI966-TVYXN'}
    scrollingSpeed = {700}
    controlArrows = {true}

    render={({ state, fullpageApi }) => {

      return (
        <ReactFullpage.Wrapper>
          <Section className="section">
            <ScrollDownArrow/>
            <MotionImage
              className="imageContainer">
              <Image
                className="image"
                src={PartnersPortalImage_1}
                alt="Partners portal Project 1"
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

export default PartnersPortalContent;

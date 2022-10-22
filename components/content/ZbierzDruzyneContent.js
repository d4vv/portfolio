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

const ZbierzDruzyneContent = () => (

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
                src="/images/projects/zbierz-druzyne/Zbierz-druzyne_1.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                blurDataURL='data:image/png;base64,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'
              />
            </MotionImage>
          </Section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default ZbierzDruzyneContent;

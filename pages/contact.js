import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

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

const lettersArrive = keyframes`
    to {
        transform: var(--base-translate3d)
    }
}`;

const animateHeight = keyframes`
  0% {
    bottom: -100%;
  }

  100% {
    bottom: 0;
  }
`;

const ParAnimation = keyframes`
  0% {
    left: -100%;
  }

  100% {
    left: 0;
  }
`;

const Main = styled(motion.main)`
  padding: 10% 10% 0 10%;
  background: var(--primaryColor);
`;

const MainContact = styled.section`
  padding-bottom: 8rem;
`;

const ContactLeft = styled.div`
  width: 55%;
  margin-top: 8rem;
`;

const ContactRight = styled.div`
  width: 40%;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactInner = styled.div`
  width: 100%;
`;

const PhotoContainer = styled.div`
  height: 90vh;
`;

const ContactPhotoWrapper = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  overflow: hidden;
`;

const ContactPhotoInner = styled.span`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
  bottom: -100%;
  animation: ${animateHeight} 2s var(--primary-curve) forwards;
`;

const ContactPhoto = styled(Image)`
  animation: ${pathsTwo} 4s step-end infinite, ${movementTwo} 4s step-end infinite; 
  opacity: .6;
`;

const Title = styled.h1`
`;

const ContactText = styled.article`
  font-size: 1.6875rem;
  line-height: 2.5rem;
  overflow: hidden;
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
  white-space: nowrap;
`;

const WordLetterHidden = styled.span.attrs({
  'aria-hidden': 'true',
})`
  opacity: 0;
`;

const TalkLetters = styled.span.attrs({
  'aria-hidden': 'true',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
  clip-path: inset(0 -5rem 3.5rem);
  z-index: 1;

  & > span:nth-child(1) {
    left: 0;
    animation-delay: 0.46s;
  }

  & > span:nth-child(2) {
    left: 4.1rem;
    animation-delay: 0.53s;
  }

  & > span:nth-child(3) {
    left: 8.8rem;
    animation-delay: 0.6s;
  }

  & > span:nth-child(4) {
    left: 13.3rem;
    animation-delay: 0.67s;
  }

  & > span:nth-child(5) {
    left: 14.7rem;
    animation-delay: 0.74s;
  }

  & > span:nth-child(6) {
    left: 21.5rem;
    animation-delay: 0.81s;
  }

  & > span:nth-child(7) {
    left: 25.34rem;
    animation-delay: 0.88s;
  }

  & > span:nth-child(8) {
    left: 30.35rem;
    animation-delay: 0.95s;
  }

  & > span:nth-child(9) {
    left: 34.55rem;
    animation-delay: 1.02s;
  }
`;

const TalkLetter = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  animation: ${lettersArrive} 1.25s var(--primary-curve) forwards;
  will-change: transform;
  transform: translate3d(0,110%,0);
`;

const ContactDetails = styled.div`
`;

const ContactTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

const ContactTopTitle = styled.div`
  font-weight: bold;
`;

const ContactBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const ContactBottomTitle = styled.div`
  font-weight: bold;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ContactListItem = styled.span`
  margin-bottom: .5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactListItemLink = styled.a`
  color: var(--secondaryColor);
  text-decoration: none;
  font-weight: bold;
`;

const ContactSocials = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ContactSocialsItem = styled.span`
  margin-bottom: .5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactSocialsItemLink = styled.a`
  color: var(--secondaryColor);
  text-decoration: none;
  font-weight: bold;
`;

export default function Contact() {
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
        <MainContact>
          <ContactWrapper>
            <ContactLeft>
            <ContactInner>
              <Title>
                <Word>
                  <WordFull>{"Let's talk"}</WordFull>
                  <WordLetterHidden>L</WordLetterHidden>
                  <WordLetterHidden>e</WordLetterHidden>
                  <WordLetterHidden>t</WordLetterHidden>
                  <WordLetterHidden>{"'"}</WordLetterHidden>
                  <WordLetterHidden>s</WordLetterHidden>
                  <WordLetterHidden>t</WordLetterHidden>
                  <WordLetterHidden>a</WordLetterHidden>
                  <WordLetterHidden>l</WordLetterHidden>
                  <WordLetterHidden>k</WordLetterHidden>
                  <TalkLetters>
                    <TalkLetter>L</TalkLetter>
                    <TalkLetter>e</TalkLetter>
                    <TalkLetter>t</TalkLetter>
                    <TalkLetter>{"'"}</TalkLetter>
                    <TalkLetter>s</TalkLetter>
                    <TalkLetter>t</TalkLetter>
                    <TalkLetter>a</TalkLetter>
                    <TalkLetter>l</TalkLetter>
                    <TalkLetter>k</TalkLetter>
                  </TalkLetters>
                </Word><br/>
              </Title>
              <ContactText>
                <Par>{"If you want to get in contact with me all you have to do is to do a call or write an email to me and see if I might be a good fit for your project. Hope you have an amazing week and hopefully to talk soon."}</Par>
                <ContactDetails>
                  <ContactTop>
                    <ContactTopTitle>Contact</ContactTopTitle>
                    <ContactList>
                      <ContactListItem>
                        <ContactListItemLink 
                          href="mailto:dawid@mejster.com">
                            dawid@mejster.com
                        </ContactListItemLink>
                      </ContactListItem>
                      <ContactListItem>
                        <ContactListItemLink
                          href="tel:+48665288886">
                            +48 665-288-886
                        </ContactListItemLink>
                      </ContactListItem>
                    </ContactList>
                  </ContactTop>
                  <ContactBottom>
                    <ContactBottomTitle>Connect</ContactBottomTitle>
                    <ContactSocials>
                      <ContactSocialsItem>
                        <ContactSocialsItemLink href="mailto:dawid@mejster.com">Linkedin</ContactSocialsItemLink>
                      </ContactSocialsItem>
                      <ContactSocialsItem>
                        <ContactSocialsItemLink href="tel:+48665288886">Behance</ContactSocialsItemLink>
                      </ContactSocialsItem>
                      <ContactSocialsItem>
                        <ContactSocialsItemLink href="tel:+48665288886">Dribble</ContactSocialsItemLink>
                      </ContactSocialsItem>
                      <ContactSocialsItem>
                        <ContactSocialsItemLink href="tel:+48665288886">Skype</ContactSocialsItemLink>
                      </ContactSocialsItem>
                    </ContactSocials>
                  </ContactBottom>
                </ContactDetails>
              </ContactText>
            </ContactInner>
            </ContactLeft>
              <ContactRight>
            <PhotoContainer>
            <ContactPhotoWrapper>
                <ContactPhotoInner>
                  <ContactPhoto 
                    src="/images/contact.jpg"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top center"
                    priority
                  />
              </ContactPhotoInner>
            </ContactPhotoWrapper>
            </PhotoContainer>
          </ContactRight>
          </ContactWrapper>
        </MainContact>
      </Main>
    </>
  )
}

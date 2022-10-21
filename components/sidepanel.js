import React, {useState} from "react";
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'

const SidePanelWrapper = styled.div`
  display: block;
  right: -76px;
  touch-action: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  top: 0px;
  position: fixed;
  z-index: 1500;
  height: 100%;
  transition: all .2s ease-in-out;

  &.active {
    right: 0!important;
    z-index: 1503;
  }
`;

const SidePanelMenu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SidePanelMenuItem = styled.li`
  flex-grow: 1;
`;

const SidePanelMenuItemLink = styled.a`
  height: 100%;
  color: var(--secondaryColor);

  body.lightMode & {
    color: var(--primaryColor);
  }
`;

const SidePanelMenuItemImageWrapper= styled.div`
  width: 96px;
  height: 100%;
  position: relative;
  margin-left: auto;
  position: relative;
`;

const SidePanelMenuItemImage = styled(Image)`
  position: absolute;
  width: 100%;
  filter: gray;
  -webkit-filter: grayscale(100%);
  -webkit-backface-visibility: hidden;
  object-fit: fill;
  transition: all .4s ease-in-out ;

  ${SidePanelMenuItemLink}:hover & {
    -webkit-filter: grayscale(0);
    transition: all .4s ease-in-out ;
  }
`;

const SidePanelMenuItemTextWrapper = styled.div`
  width: 0;
  height: 100%;
  white-space: nowrap;
  margin-right: -100px;
  opacity: 0;
  overflow: visible;
  transition: all .4s ease-in-out;
  float: right;

  ${SidePanelWrapper}.active & {
    overflow: visible;
    width: auto;
    margin-right: 0;
    opacity: 1;
    transition: all .4s ease-in-out ;
  }
`;

const SidePanelMenuItemTextInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-size: 35px;
  opacity: .2;
  padding-right: 160px;
  font-size: 35px;
  transition: all .2s ease-in-out;
  float: right;

  body.lightMode & {
    opacity: .4;
  }

  ${SidePanelMenuItemLink}:hover & {
    opacity: 1;
  }
`;

const SidePanelMenuItemTextTitle= styled.h3`
  font-size: 1.4rem;
  margin-right: 0px;
  white-space: nowrap;
`;

const SidePanelMenuItemTextType = styled.span`
  font-size: .8rem;
  opacity: .6;
  margin-bottom: 1rem;
  margin-right: 0.1rem;

  body.lightMode & {
    opacity: .8;
  }
`;

const SidePanelTrigger = styled.div`
  position: fixed;
  width: 10%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 1501;
  display: block;

  &.active {
    display: none;
  }
`;


export default function SidePanel({hoverEnter, hoverLeave}) {

  const [activePanel, setActivePanel] = useState()
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <SidePanelTrigger
        onMouseEnter={() => setActivePanel("active")}
        className={activePanel}
      >
      </SidePanelTrigger>
      <SidePanelWrapper 
        onMouseLeave={() => setActivePanel("")}
        className={activePanel}>
        <SidePanelMenu>
          <SidePanelMenuItem>
            <Link href='/portfolio/amorphous' scroll={false}>
              <SidePanelMenuItemLink
                onClick={() => setActivePanel("")}
              >
                <SidePanelMenuItemTextWrapper
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                >
                  <SidePanelMenuItemTextInner>
                    <SidePanelMenuItemTextType>Amorphous /</SidePanelMenuItemTextType>
                    <SidePanelMenuItemTextTitle>Amorphous</SidePanelMenuItemTextTitle>
                  </SidePanelMenuItemTextInner>
                </SidePanelMenuItemTextWrapper>
                <SidePanelMenuItemImageWrapper>
                  <SidePanelMenuItemImage
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}
                    src="/images/photo.png"
                    alt="Picture of the author"
                    layout="fill"
                  />
                  </SidePanelMenuItemImageWrapper>
              </SidePanelMenuItemLink>
            </Link>
          </SidePanelMenuItem>
          <SidePanelMenuItem>
            <Link href='/portfolio/armada'>
              <SidePanelMenuItemLink
                onClick={() => setActivePanel("")}
              >
                <SidePanelMenuItemTextWrapper
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                >
                  <SidePanelMenuItemTextInner>
                    <SidePanelMenuItemTextType>Sabre /</SidePanelMenuItemTextType>
                    <SidePanelMenuItemTextTitle>Armada</SidePanelMenuItemTextTitle>
                  </SidePanelMenuItemTextInner>
                </SidePanelMenuItemTextWrapper>
                <SidePanelMenuItemImageWrapper>
                  <SidePanelMenuItemImage
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}
                    src="/images/photo.png"
                    alt="Picture of the author"
                    layout="fill"
                  />
                  </SidePanelMenuItemImageWrapper>
              </SidePanelMenuItemLink>
            </Link>
          </SidePanelMenuItem>
          <SidePanelMenuItem>
            <Link href='/portfolio/aums'>
              <SidePanelMenuItemLink
                onClick={() => setActivePanel("")}
              >
                <SidePanelMenuItemTextWrapper
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                >
                  <SidePanelMenuItemTextInner>
                    <SidePanelMenuItemTextType>Asseco /</SidePanelMenuItemTextType>
                    <SidePanelMenuItemTextTitle>AUMS</SidePanelMenuItemTextTitle>
                  </SidePanelMenuItemTextInner>
                </SidePanelMenuItemTextWrapper>
                <SidePanelMenuItemImageWrapper>
                  <SidePanelMenuItemImage
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}
                    src="/images/photo.png"
                    alt="Picture of the author"
                    layout="fill"
                  />
                  </SidePanelMenuItemImageWrapper>
              </SidePanelMenuItemLink>
            </Link>
          </SidePanelMenuItem>
          <SidePanelMenuItem>
            <Link href='/portfolio/partners-portal'>
              <SidePanelMenuItemLink
                onClick={() => setActivePanel("")}
              >
                <SidePanelMenuItemTextWrapper
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                >
                  <SidePanelMenuItemTextInner>
                    <SidePanelMenuItemTextType>Packetfabric /</SidePanelMenuItemTextType>
                    <SidePanelMenuItemTextTitle>Partners Portal</SidePanelMenuItemTextTitle>
                  </SidePanelMenuItemTextInner>
                </SidePanelMenuItemTextWrapper>
                <SidePanelMenuItemImageWrapper>
                  <SidePanelMenuItemImage
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}
                    src="/images/photo.png"
                    alt="Picture of the author"
                    layout="fill"
                  />
                  </SidePanelMenuItemImageWrapper>
              </SidePanelMenuItemLink>
            </Link>
          </SidePanelMenuItem>
          <SidePanelMenuItem>
            <Link href='/portfolio/portal'>
              <SidePanelMenuItemLink
                onClick={() => setActivePanel("")}
              >
                <SidePanelMenuItemTextWrapper
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                >
                  <SidePanelMenuItemTextInner>
                    <SidePanelMenuItemTextType>RSTOR /</SidePanelMenuItemTextType>
                    <SidePanelMenuItemTextTitle>Portal</SidePanelMenuItemTextTitle>
                  </SidePanelMenuItemTextInner>
                </SidePanelMenuItemTextWrapper>
                <SidePanelMenuItemImageWrapper>
                  <SidePanelMenuItemImage
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}
                    src="/images/photo.png"
                    alt="Picture of the author"
                    layout="fill"
                  />
                  </SidePanelMenuItemImageWrapper>
              </SidePanelMenuItemLink>
            </Link>
          </SidePanelMenuItem>
          <SidePanelMenuItem>
            <Link href='/portfolio/sxdrive'>
              <SidePanelMenuItemLink
                onClick={() => setActivePanel("")}
              >
                <SidePanelMenuItemTextWrapper
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                >
                  <SidePanelMenuItemTextInner>
                    <SidePanelMenuItemTextType>Skylable /</SidePanelMenuItemTextType>
                    <SidePanelMenuItemTextTitle>SXDrive</SidePanelMenuItemTextTitle>
                  </SidePanelMenuItemTextInner>
                </SidePanelMenuItemTextWrapper>
                <SidePanelMenuItemImageWrapper>
                  <SidePanelMenuItemImage
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}
                    src="/images/photo.png"
                    alt="Picture of the author"
                    layout="fill"
                  />
                  </SidePanelMenuItemImageWrapper>
              </SidePanelMenuItemLink>
            </Link>
          </SidePanelMenuItem>
          <SidePanelMenuItem>
            <Link href='/portfolio/zbierz-druzyne'>
              <SidePanelMenuItemLink
                onClick={() => setActivePanel("")}
              >
                <SidePanelMenuItemTextWrapper
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                >
                  <SidePanelMenuItemTextInner>
                    <SidePanelMenuItemTextType>Globedata /</SidePanelMenuItemTextType>
                    <SidePanelMenuItemTextTitle>Zbierz Druzyne</SidePanelMenuItemTextTitle>
                  </SidePanelMenuItemTextInner>
                </SidePanelMenuItemTextWrapper>
                <SidePanelMenuItemImageWrapper>
                  <SidePanelMenuItemImage
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}
                    src="/images/photo.png"
                    alt="Picture of the author"
                    layout="fill"
                  />
                  </SidePanelMenuItemImageWrapper>
              </SidePanelMenuItemLink>
            </Link>
          </SidePanelMenuItem>
        </SidePanelMenu>
      </SidePanelWrapper>
    </>
  )
}

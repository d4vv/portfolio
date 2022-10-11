import Link from 'next/link'
import Image from 'next/image'
import Navigation from './navigation'
import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 6rem;
  z-index: 2;
  pointer-events: none;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10%;
  pointer-events: visible;
`;

const LogoWrapper = styled.a`
  margin-right: 4rem;
`;

const Logo = styled(Image)`
  margin-right: 2rem;
`;


export default function Top({hoverEnter, hoverLeave}) {

  const [isOpen, setOpen] = useState(false)

  const handleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <Header>
      <HeaderWrapper>
        <GlobalStyle />
        <Link href='/' scroll={false}>
          <LogoWrapper onClick={() => setOpen(false)}>
            <Logo
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              className='logo'
              src='/images/logo.svg'
              alt='Dawid Mejster - Digital Artist'
              width={50}
              height={60}
            />
          </LogoWrapper>
        </Link>
        <Navigation
          isOpen={isOpen}
          setOpen={setOpen}
          handleNav={handleNav}
          hoverEnter={hoverEnter}
          hoverLeave={hoverLeave}
        />
      </HeaderWrapper>
    </Header>
  )
}

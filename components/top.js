import Link from 'next/link'
import Image from 'next/image'
import Navigation from './navigation'
import logo from './logo'
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
  height: 3.75rem;
  margin-right: 4rem;
  z-index: 2;
`;

const Logo = styled(logo)`
  height: 100%;
  width: auto;
  margin-right: 2rem;
  fill: var(--secondaryColor);
  transition: all .5s;

  body.lightMode & {
    fill: var(--primaryColor);
    transition: all .5s;
  }

  &.navOpen {
    fill: var(--secondaryColor)!important;
    transition: all .5s;
  }
`;

export default function Top({hoverEnter, hoverLeave, isOpen, setOpen, handleNav}) {

  return (
    <Header>
      <HeaderWrapper>
        <GlobalStyle />
        <Link href='/' scroll={false}>
          <LogoWrapper onClick={() => setOpen(false)}>
            {/* <Logo */}
            {/*   onMouseEnter={hoverEnter} */}
            {/*   onMouseLeave={hoverLeave} */}
            {/*   className='logo' */}
            {/*   src='/images/logo.svg' */}
            {/*   alt='Dawid Mejster - Digital Artist' */}
            {/*   width={50} */}
            {/*   height={60} */}
            {/* /> */}
            <Logo
              className={
                isOpen
                  ? 'navOpen'
                  : ''
              }
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              viewBox="0 0 120 150.4">
              <g>
                <path
                  d="M56.7,0L0,134.5l120,15.9L56.7,0z M85.8,123.7l-39.2-5.3l28.1-21.3L85.8,123.7z M56.7,54.3L66.2,77L38.1,98.3
                  L56.7,54.3z"
                />
              </g>
            </Logo>
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

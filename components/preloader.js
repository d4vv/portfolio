import React, { useState } from 'react'
import { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import { keyframes} from 'styled-components'

const FadeOut = keyframes`
  0% {
    opacity: 1 
  }

  100% {
    opacity: 0;
  }
`;

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 99999;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: var(--primaryColor);
    transition: all .3s ease 0s
  }

  &.welcomed:before {
    animation: ${FadeOut} 700ms ease-in-out 500ms forwards
  }
`;

const WelcomeText = styled.h1`
  font-size: 1.8rem;
  color: var(--secondaryColor);
`;

const FullName = styled.span`
  font-family: 'Helvetica Now Extra Light';
  animation: ${FadeOut} 500ms ease-in-out 670ms forwards
`;

const Portfolio = styled.span`
  font-weight: 100;
  margin-left: 1rem;
  font-family: 'Helvetica Now Thin';
  animation: ${FadeOut} 500ms ease-in-out 850ms forwards
`;


const Preloader = () => {
  useEffect(() => {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    let preloader = document.getElementById("preloader");

    if (preloader) {
      if (!isMobile) {
        setTimeout(function () {
          preloader.classList.add("welcomed");
        }, 800);
        setTimeout(function () {
          preloader.remove();
        }, 2000);
      } else {
        preloader.remove();
      }
    }
    setTimeout(() => {
      document.querySelector("body").classList.add("opened");
    }, 3000);
  }, []);

  return (
    <Fragment>
      <Welcome id='preloader'>
        <WelcomeText data-text='Dawid Mejster Portfolio'>
          <FullName>Dawid Mejster</FullName>
          <Portfolio>Portfolio</Portfolio>
        </WelcomeText>
      </Welcome>
    </Fragment>
  );
};
export default Preloader;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #111218;
    --secondaryColor: #f1f1f1;
    --accentColor: #f1f1f1;
    --redColor: #ff4851;
    --base-translate3d: translate3d(0,0,0);
    --primary-curve: cubic-bezier(0.62,0.05,0.01,0.99);
    --marqueeColor: #1d1e26;
  }

  ::selection {
    background: var(--redColor);
  }

  * {
    cursor: none!important;
  }

  html::-webkit-scrollbar {
    display: none;
  }

  html {
    background: var(--primaryColor);
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  body {
    background: var(--primaryColor);
    font-family: 'Helvetica Now Light';
    color: var(--secondaryColor);
    margin: 0;
  }

  .imageContainer {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .imageContainer > div {
    position: unset;
  }

  .image {
    object-fit: cover;
    width: 100%;
    position: relative;
    height: unset;
    cursor: pointer;
  }

  .navHidden {
    pointer-events: none;
  }

  li {
    list-style: none;
  }

  a {
    cursor: pointer;
  }

  .darkMode .hamburger-react div {
    background: var(--secondaryColor)!important;
  }

  .lightMode .hamburger-react div {
    background: var(--primaryColor)!important;
  }

  .lightMode .navOpen .hamburger-react div {
    background: var(--secondaryColor)!important;
  }
`;

export default GlobalStyle;

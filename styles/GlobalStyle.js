import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #111218;
    --secondaryColor: #f1f1f1;
    --accentColor: #f1f1f1;
  }

  @font-face {
      font-family: 'Helvetica Now Regular';
      src: url('/fonts/helveticanowtext-webfont.woff2') format('woff2'),
          url('/fonts/helveticanowtext-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Extra Light';
      src: url('/fonts/helveticanowtextextralight-webfont.woff2') format('woff2'),
          url('/fonts/helveticanowtextextralight-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Light';
      src: url('/fonts/helveticanowtextlight-webfont.woff2') format('woff2'),
          url('/fonts/helveticanowtextlight-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Thin';
      src: url('/fonts/helveticanowtextthin-webfont.woff2') format('woff2'),
          url('/fonts/helveticanowtextthin-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  * {
    cursor: none!important;
  }

  .cursor {
    background: rgba(255,255,255,.5);
    height: 32px;
    width: 32px;
    border-radius: 50%;
    position: fixed;
    top: 400;
    left: 400;
    pointer-events: none;
    z-index: 1600;
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

  .test-hidden {
    pointer-events: none;
  }

  .logo {
    z-index: 2;
  }

  li {
    list-style: none;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --accent-color: #1f004d;
    --main-bg-color: #ffad33;
    --mainActive: #ffd700;
    --black: #161515;
    --white: #fff;
    --grey: #b3b3b3;
    --fontFamily: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    --siteWidth: 77ch;
}
html,body {
    margin: 0;
    padding: 0;
    background-color: var(--main-bg-color);
    font-family: var(--fontFamily);
    color: var(--black);
} 
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

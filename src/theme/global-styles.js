import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

    body {
        background-color: #201f1f;
        height: 100vh;
        font-family: 'Ubuntu', sans-serif;
    }

    blockquote {
        color: hsla(0, 0%, 100%, 0.59);
        border-left: 0.32813rem solid hsla(0, 100%, 98.6%, 0.9);
    }

    #___gatsby{
        background-color: blue;
        height: 100%;
    }


    .icon-svg {
    color: #ecebe8;
    width: 80px;
    height: 80px;
    }

    .icon-medium{
        width: 45px;
        height: 45px;
    }
    @media (min-width: 160px) and (max-width: 848px) {
        .icon-medium{
            width: 25px;
        height: 25px;
        }
        .icon-svg {
            color: #ecebe8;
        width: 45px;
        height: 45px;
    }
  }
`

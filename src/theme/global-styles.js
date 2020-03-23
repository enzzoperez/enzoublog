import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Ubuntu");

    body {
        background-color: #201f1f;
        height: 100vh;
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

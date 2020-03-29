import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Button from "../components/button"
import { GlobalStyle } from "../theme/global-styles"

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
  background-color: #201f1f;
`

const InfoContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Name = styled.div`
  display: flex;
  color: #ecebe8;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
  justify-content: center;
  align-items: center;
  @media (min-width: 160px) and (max-width: 848px) {
    font-size: 25px;
  }
`

const GuionBajo = styled.div`
  width: 15px;
  height: 50px;
  background-color: #ecebe8;
  animation: titilar 1s infinite;

  @keyframes titilar {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media (min-width: 160px) and (max-width: 848px) {
    width: 2px;
    height: 21px;
  }
`

const Dev = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-size: 2rem;
  color: #ecebe8;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  @media (min-width: 160px) and (max-width: 848px) {
    text-align: center;
    font-size: 18px;
  }
`

const LinkStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5%;
  text-decoration: none;
  @media (min-width: 160px) and (max-width: 848px) {
    margin-top: 10%;
  }
`

const MediumDiv = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 160px) and (max-width: 848px) {
    height: 45px;
    width: 45px;
  }
`

const AnchorStyled = styled.a`
  text-decoration: none;
  color: transparent;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkButton = styled(Link)`
  text-decoration: none;
  color: transparent;
`

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <SEO
          title="Home"
          keywords={[
            `native`,
            `node`,
            `javascript`,
            `react`,
            `developer`,
            `frontend`,
          ]}
        />
        <Root name="ELROOT">
          <InfoContainer name="INFO-CONTAINER">
            <Name className="name">
              $ Enzo Perez &nbsp; <GuionBajo className="guionBajo"></GuionBajo>
            </Name>
            <Dev className="dev">
              Frontend Dev (&amp; Frustrated soccer player &#129325;)
            </Dev>
            <LinkStyled>
              <AnchorStyled
                title="Github"
                href="https://github.com/EnzzoPerez"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <svg
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 438.549 438.549"
                  xmlSpace="preserve"
                  className="icon-svg"
                >
                  <g>
                    <g>
                      <path
                        d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                    </g>
                  </g>{" "}
                </svg>
              </AnchorStyled>

              <AnchorStyled
                title="Linkedin"
                href="https://www.linkedin.com/in/enzoperezm/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <svg viewBox="0 0 512 512" className="icon-svg">
                  <g>
                    <path
                      d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                  </g>{" "}
                </svg>
              </AnchorStyled>

              <AnchorStyled
                title="Medium"
                href="https://medium.com/@enzzorp"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <MediumDiv className="div-medium">
                  <svg
                    id="Bold"
                    enable-background="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    className="icon-medium"
                  >
                    <g>
                      <path
                        d="m7.996 21.324c0 .695-.521.982-1.098.695l-6.228-3.113c-.188-.089-.346-.238-.475-.447s-.195-.417-.195-.622v-15.227c0-.568.341-.825 1.112-.441l6.844 3.42c.099.099.026-.581.04 15.735zm.857-14.32 7.152 11.568-7.152-3.553zm15.147.241v14.079c0 .223-.062.403-.188.541-.125.138-.295.207-.509.207s-.424-.058-.629-.174l-5.906-2.939zm-.04-1.603c0 .027-1.145 1.895-3.435 5.603s-3.632 5.88-4.025 6.512l-5.223-8.469 4.339-7.039c.236-.388.72-.456 1.045-.294l7.246 3.607c.035.017.053.044.053.08z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#201f1f"
                      />
                    </g>{" "}
                  </svg>
                </MediumDiv>
              </AnchorStyled>
            </LinkStyled>
            <ButtonContainer>
              <LinkButton to="/blog">
                <Button
                  radius={"40px"}
                  background={"transparent"}
                  marginTop={"40px"}
                >
                  Ir a mi Blog
                </Button>
              </LinkButton>
            </ButtonContainer>
          </InfoContainer>
        </Root>
      </>
    )
  }
}

export default IndexPage

import React from "react"
import styled from "styled-components"
import { Button } from "../components/Button"
import BG from "../images/background3.jpg"
import { Gap } from "../components/Gap"
import Header from "../components/header"
import { Link } from "gatsby"

const MainSplashContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${BG});
  background-size: cover;
  color: white;
`
const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px;
  color: white;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainSplash = () => (
  <MainSplashContainer id="home">
    <Header />
    <Container>
      <h1>Hi, my name is Sam McGovern.</h1>
      <h2>
        I'm a Front End Web Developer based in Teesside looking for a new
        position.
      </h2>
      <ButtonContainer>
        <Link to={"#contact"}>
          <Button>Contact me</Button>
        </Link>

        <Gap right={10} left={10}>
          <span>or</span>
        </Gap>

        <Link to={"#work"}>
          <Button variation="secondary">View my work </Button>
        </Link>
      </ButtonContainer>
    </Container>
  </MainSplashContainer>
)
export default MainSplash

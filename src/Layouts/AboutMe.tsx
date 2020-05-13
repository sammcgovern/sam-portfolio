import React from "react"
import styled from "styled-components"
import { Grid } from "../components/Grid"
import MeQuery from "../queries/MeQuery"
import { Panel } from "../components/Panel"
import { Gap } from "../components/Gap"

const AboutContainer = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  padding: 80px;
`
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
`
const ImageContainer = styled.div`
  width: 30%;
`
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const AboutMe = () => (
  <AboutContainer id="about">
    <h1>About me</h1>
    <FlexBox>
      <ImageContainer>
        <Panel>
          <MeQuery />
        </Panel>
      </ImageContainer>
      <Gap right={50} />
      <TextContainer>
        <p>
          A Frontend developer with 3 years experience using ReactJS to build
          applications, responsive websites and software features to improve
          usability for users. Able to work to deadlines and under pressure. Up
          to date with current web-design trends and committed to making a
          career in the field.
        </p>
      </TextContainer>
    </FlexBox>
  </AboutContainer>
)
export default AboutMe

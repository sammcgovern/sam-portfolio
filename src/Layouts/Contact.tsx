import React from "react"
import styled from "styled-components"
import { Gap } from "../components/Gap"
import { Paragraph } from "../components/Paragraph"
import LinkedInQuery from "../queries/LinkedInQuery"
import InstagramQuery from "../queries/InstagramQuery"
import FacebookQuery from "../queries/FacebookQuery"

const ContactContainer = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #f5f5f5;
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
const IconWrapper = styled.div`
  height: 30px;
  width: 30px;
`
const Contact = () => (
  <ContactContainer id="contact">
    <h1>Contact</h1>
    <Paragraph>
      For any information, or even just a chat, please get in touch with any of
      the methods below.
    </Paragraph>
    <Gap bottom={30} />
    <FlexBox>
      <a
        href="https://www.linkedin.com/in/sam-mcgovern-7b97a9b4/"
        target="_blank"
      >
        <IconWrapper>
          <LinkedInQuery />
        </IconWrapper>
      </a>
      <Gap right={20} />
      <a href="https://www.instagram.com/sam.mcgovern/" target="_blank">
        <IconWrapper>
          <InstagramQuery />
        </IconWrapper>
      </a>
      <Gap right={20} />
      <a href="https://www.facebook.com/sam.mcgovern.14/" target="_blank">
        <IconWrapper>
          <FacebookQuery />
        </IconWrapper>
      </a>
    </FlexBox>
  </ContactContainer>
)
export default Contact

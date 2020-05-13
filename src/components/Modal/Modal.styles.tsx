import styled, { createGlobalStyle } from "styled-components"
import { IProps, ModalVariation } from "./Modal"

export const ModalGlobalStyle = createGlobalStyle`
  .underlay {
    background-color: black;
    opacity: 0.8;
    transition: opacity 0.2s ease-in;
  }

  .underlay--open {
    opacity: 1;
  }

  .underlay--no-click {
    cursor: default!important;
  }
`

export const ModalElement = styled.div<IProps>`
  margin: 2rem 0;
  transition: opacity 0.1s ease-in, transform 0.1s ease-in;
  transition-delay: 0.2s;
  transform: ${({ isOpen }) =>
    isOpen ? "scale(1) translateY(0)" : "scale(1.1) translateY(10%)"};
  display: grid;
  grid-template-areas: "header" "content";
  grid-template-rows: auto 1fr;
  background-color: white;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  border-radius: 5px;
  min-width: ${({ minWidth }) => minWidth}px;
  min-height: ${({ minHeight }) => minHeight}px;
  max-width: ${props => getWidth(props)};
  max-height: ${props => (props.maxHeight ? getHeight(props) : "none")};
  ${props =>
    props.size === "fullscreen"
      ? "height:" + getHeight(props)
      : "height: auto"};
  ${props =>
    props.size === "fullscreen" ? "width:" + getWidth(props) : "width: auto"};
  overflow: ${({ overflow }) => overflow};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 576px) {
    width: 90vw;
  }
`

export const HeaderElement = styled.div<{ variation: ModalVariation }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding-bottom: 10px;
  border-bottom: ${({ variation }) =>
    variation === "clean" ? "none" : "1px solid rgba(0, 0, 0, 0.05)"};
  box-shadow: ${({ variation }) =>
    variation === "clean" ? "none" : "0px 5px 15px 0px rgba(0, 0, 0, 0.03)"};
`

export const HeaderContentElement = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 20px;
`

export const HeaderButtonElement = styled.div`
  margin-right: 20px;
`

export const ContentElement = styled.div<{ overflow: string }>`
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 0px;
  margin: 0px;
  margin-bottom: 20px;
  overflow: ${({ overflow }) => overflow};
  position: relative;

  ::-webkit-scrollbar {
    background-color: transparent;
    height: 8px;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

function getWidth(props: IProps) {
  switch (props.size) {
    case "small":
      return "400px"
    case "medium":
    default:
      return "600px"
    case "large":
      return "90vw"
    case "tall":
      return "500px"
    case "wide":
      return "80vw"
    case "fullscreen":
      return "90vw"
  }
}

function getHeight(props: IProps) {
  switch (props.size) {
    case "small":
      return "40vh"
    case "medium":
    default:
      return "60vh"
    case "large":
      return "90vh"
    case "tall":
      return "80vh"
    case "wide":
      return "60vh"
    case "fullscreen":
      return "90vh"
  }
}

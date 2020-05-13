import * as React from "react"
import styled from "styled-components"

export interface IProps {
  color?: string
  variation?: variation
}

const HeadingElement = styled.h1<IProps>`
  color: ${props => (props.color ? props.color : "#333")};
  font-size: ${props => getSize(props.variation)};
  line-height: ${props => getLineHeight(props.variation)};
`

type variation = "h1" | "h2" | "h3" | "h4"

export const Heading: React.FC<IProps> = props => {
  const { color, variation } = props
  return (
    <HeadingElement color={color} variation={variation} as={props.variation}>
      {props.children}
    </HeadingElement>
  )
}

function getSize(variation) {
  switch (variation) {
    case "h1":
      return "35px"
    case "h2":
      return "24px"
    case "h3":
      return "18px"
    case "h4":
      return "16px"
    default:
      return "35px"
  }
}
function getLineHeight(variation) {
  switch (variation) {
    case "h1":
      return "42px"
    case "h2":
      return " 30px"
    case "h3":
      return "28px"
    case "h4":
      return "19px"
    default:
      return "42px"
  }
}

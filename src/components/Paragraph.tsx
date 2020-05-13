import * as React from "react"
import styled from "styled-components"

export interface IProps {
  /** Text color. Defaults to theme.vars.newColor.darkGS1 */
  color?: string
  /** Bold styling. Optional */
  bold?: boolean
  htmlTag?: ElementType
}
type ElementType = "span"
const ParagraphElement = styled.p<IProps>`
  font-size: 14px;
  line-height: 24px;
  font-weight: ${props => (props.bold ? "600" : "500")};
  color: ${props => (props.color ? props.color : "#333")};
  margin: 0;
  padding: 0;
  & + & {
    margin-top: 10px;
  }
`

export const Paragraph: React.FC<IProps> = props => {
  const { color, bold, htmlTag } = props
  return (
    <ParagraphElement
      color={color}
      bold={bold}
      as={htmlTag}
      data-testid="Paragraph"
    >
      {props.children}
    </ParagraphElement>
  )
}

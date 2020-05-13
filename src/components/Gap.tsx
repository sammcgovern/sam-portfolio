import * as React from "react"
import styled from "styled-components"

const GapElement = styled.div`
  display: block;
  margin-top: ${(props: any) => props.top || 0}px;
  margin-left: ${(props: any) => props.left || 0}px;
  margin-right: ${(props: any) => props.right || 0}px;
  margin-bottom: ${(props: any) => props.bottom || 0}px;
` as any

export interface IProps {
  top?: number
  left?: number
  right?: number
  bottom?: number
}

export const Gap: React.SFC<IProps> = props => {
  return <GapElement {...props} data-testid="Gap" />
}

import React, { FC } from "react"
import styled from "styled-components"

const StyledBadge = styled.button<IProps>`
  padding: 0px 20px;
  margin: 0;
  background-color: #7296fb;
  border: 0;
  height: 40px;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`

export interface IProps {
  onClick?: (e: any) => void
  disabled?: boolean
  type?: "submit" | "reset" | "button"
  ariaLabel?: string
}

export const Badge: FC<IProps> = ({ ariaLabel, children }) => (
  <StyledBadge aria-label={ariaLabel}>{children}</StyledBadge>
)

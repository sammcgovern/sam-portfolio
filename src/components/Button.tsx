import React, { FC } from "react"
import styled from "styled-components"

const StyledButton = styled.button<IProps>`
  cursor: pointer;
  padding: 0px 20px;
  margin: 0;
  background-color: ${({ variation }) =>
    variation === "default" ? "#fbd772" : "transparent"};
  border: 0;
  height: 40px;
  font-size: 16px;
  color: ${({ variation }) => (variation === "default" ? "#333" : "white")};
  border: ${({ variation }) =>
    variation === "default" ? "none" : "1px solid white"};
  font-weight: bold;
  :hover {
    transform: translateY(-1px);
    background-color: ${({ variation }) =>
      variation === "default" ? "#f9c228" : "white"};

    color: ${({ variation }) => (variation === "default" ? "#333" : "#333")};
  }
`

export interface IProps {
  onClick?: (e: any) => void
  disabled?: boolean
  type?: "submit" | "reset" | "button"
  ariaLabel?: string
  variation?: "default" | "secondary"
}

export const Button: FC<IProps> = ({
  ariaLabel,
  type = "button",
  onClick,
  disabled,
  children,
  variation = "default",
}) => (
  <StyledButton
    aria-label={ariaLabel}
    type={type}
    onClick={onClick}
    disabled={disabled}
    variation={variation}
  >
    {children}
  </StyledButton>
)

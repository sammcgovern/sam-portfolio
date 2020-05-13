import React, { FC } from "react"
import styled from "styled-components"

const StyledPanel = styled.div`
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`

export const Panel: FC = ({ children }) => <StyledPanel>{children}</StyledPanel>

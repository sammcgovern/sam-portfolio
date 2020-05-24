/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.css"
import styled from "styled-components"

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Footer = styled.footer`
background-color: #f5f5f5;
`;
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <Footer>
          <FlexBox>© {new Date().getFullYear()}, SAM MCGOVERN</FlexBox>
        </Footer>
      </div>
    </>
  )
}

export default Layout

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
`

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          <FlexBox>© {new Date().getFullYear()}, SAM MCGOVERN</FlexBox>
        </footer>
      </div>
    </>
  )
}

export default Layout

import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Gap } from "./Gap"

const HeaderWraper = styled.div`
  height: 80px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  justify-content: space-between;
`

const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const Header = () => (
  <HeaderWraper>
    <div>
      <Link to="#home" style={{ color: "#fff", textDecoration: `none` }}>
        SAM MCGOVERN
      </Link>
    </div>
    <HeaderRight>
      <Link to="#about" style={{ color: "#fff", textDecoration: `none` }}>
        ABOUT ME
      </Link>
      <Gap right={30} />
      <Link to="#work" style={{ color: "#fff", textDecoration: `none` }}>
        MY WORK
      </Link>
      <Gap right={30} />
      <Link
        to="#contact"
        style={{
          color: "#fff",
          textDecoration: `none`,
        }}
      >
        CONTACT
      </Link>
    </HeaderRight>
  </HeaderWraper>
)

export default Header

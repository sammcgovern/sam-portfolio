import React from "react"
import styled from "styled-components"
import { Grid } from "../components/Grid"
import { Panel } from "../components/Panel"
import OliverChristeningQuery from "../queries/oliverChristeningQuery"
import OliverBirthdayQuery from "../queries/OliverBirthdayQuery"
import JasonBirthdayQuery from "../queries/JasonBirthdayQuery"
import GeorgeChristeningQuery from "../queries/GeorgeChristeningQuery"
import TommiChristeningQuery from "../queries/TommiChristeningQuery"
import CJLeaderQuery from "../queries/CJLeaderQuery"

const PrintContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #FFFFFF;
  flex: 1;
  padding: 150px;
`




export const Print = () => {
 
  return (
    <PrintContainer id="print">
      <h1>My Print Work</h1>
      <Grid columnNumber={3} gridGap={30}>
        
        <Panel>
            <OliverBirthdayQuery />
        </Panel>
        <Panel>
            <GeorgeChristeningQuery />
        </Panel>
        <Panel>
            <TommiChristeningQuery />
        </Panel>
        <Panel>
            <OliverChristeningQuery />
        </Panel>
        <Panel>
            <JasonBirthdayQuery />
        </Panel>
        <Panel>
            <CJLeaderQuery />
        </Panel>
       
      </Grid>
    </PrintContainer>
  )
}
export default Print

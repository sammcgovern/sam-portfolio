import React from "react"

import styled from "styled-components"
import { Grid } from "../components/Grid"
import { Panel } from "../components/Panel"
import { Heading } from "../components/Heading"

import { Gap } from "../components/Gap"
import Image from "../components/image"
import SalecycleQuery from "../queries/salecycleQuery"
import EqualProWebsiteQuery from "../queries/EqualProWebsiteQuery"
import EqualProQuery from "../queries/EqualProQuery"
import DDLiQuery from "../queries/DDLiQuery"
import { ABNModal } from "../WorkModals/ABNModal"
import { Button } from "../components/Button"
import { EqualSoftwareModal } from "../WorkModals/EqualSoftwareModal"
import { EqualWebsiteModal } from "../WorkModals/EqualWebsiteModal"
import { DDLiWebsiteModal } from "../WorkModals/DDLiWebsiteModal"
import { SaleCycleAppModal } from "../WorkModals/SaleCycleAppModal"
import { SaleCycleComponentModal } from "../WorkModals/SaleCycleComponentModal"

const WorkContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #f5f5f5;
  flex: 1;
  padding: 150px;
`

const Background = styled.div`
  width: 100%;
  background-color: black;
  padding: 20px;
`
const ImageContainer = styled.div`
  width: 100%;
`

export const Work = () => {
  const [openSaleCycleAppModal, setOpenSaleCycleAppModal] = React.useState(
    false
  )
  const [
    openSaleCycleComponentModal,
    setOpenSaleCycleComponentModal,
  ] = React.useState(false)
  const [openABNModal, setOpenABNModal] = React.useState(false)
  const [openEqualSoftwareModal, setOpenEqualSoftwareModal] = React.useState(
    false
  )
  const [openEqualWebsiteModal, setOpenEqualWebsiteModal] = React.useState(
    false
  )
  const [openDDLiWebsiteModal, setOpenDDLiWebsiteModal] = React.useState(false)
  return (
    <WorkContainer id="work">
      <SaleCycleAppModal
        openSaleCycleAppModal={openSaleCycleAppModal}
        setOpenSaleCycleAppModal={setOpenSaleCycleAppModal}
      />
      <SaleCycleComponentModal
        openSaleCycleComponentModal={openSaleCycleComponentModal}
        setOpenSaleCycleComponentModal={setOpenSaleCycleComponentModal}
      />
      <ABNModal openABNModal={openABNModal} setOpenABNModal={setOpenABNModal} />
      <EqualSoftwareModal
        openEqualSoftwareModal={openEqualSoftwareModal}
        setOpenEqualSoftwareModal={setOpenEqualSoftwareModal}
      />
      <EqualWebsiteModal
        openEqualWebsiteModal={openEqualWebsiteModal}
        setOpenEqualWebsiteModal={setOpenEqualWebsiteModal}
      />
      <DDLiWebsiteModal
        openDDLiWebsiteModal={openDDLiWebsiteModal}
        setOpenDDLiWebsiteModal={setOpenDDLiWebsiteModal}
      />
      <h1>My Work</h1>
      <Grid columnNumber={2} gridGap={30}>
        <Panel>
          <Background>
            <SalecycleQuery />
          </Background>
          <Gap bottom={20} />
          <Heading variation="h2">Salecycle React App</Heading>
          <Button onClick={() => setOpenSaleCycleAppModal(true)}>
            Read More
          </Button>
        </Panel>
        <Panel>
          <Background>
            <SalecycleQuery />
          </Background>
          <Gap bottom={20} />
          <Heading variation="h2">Salecycle Component Library</Heading>
          <Button onClick={() => setOpenSaleCycleComponentModal(true)}>
            Read More
          </Button>
        </Panel>
        <Panel>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <Gap bottom={20} />
          <Heading variation="h2">ABN Sports Therapy</Heading>
          <Button onClick={() => setOpenABNModal(true)}>Read More</Button>
        </Panel>
        <Panel>
          <ImageContainer>
            <EqualProQuery />
          </ImageContainer>
          <Gap bottom={20} />
          <Heading variation="h2">DDLi - E-qual pro software</Heading>
          <Button onClick={() => setOpenEqualSoftwareModal(true)}>
            Read More
          </Button>
        </Panel>
        <Panel>
          <ImageContainer>
            <EqualProWebsiteQuery />
          </ImageContainer>
          <Gap bottom={20} />
          <Heading variation="h2">DDLi - E-qual pro website</Heading>
          <Button onClick={() => setOpenEqualWebsiteModal(true)}>
            Read More
          </Button>
        </Panel>
        <Panel>
          <ImageContainer>
            <DDLiQuery />
          </ImageContainer>
          <Gap bottom={20} />
          <Heading variation="h2">DDLi website</Heading>
          <Button onClick={() => setOpenDDLiWebsiteModal(true)}>
            Read More
          </Button>
        </Panel>
      </Grid>
    </WorkContainer>
  )
}
export default Work

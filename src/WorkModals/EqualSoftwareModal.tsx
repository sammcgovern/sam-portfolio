import * as React from "react"
import { Modal } from "../components/Modal/Modal"
import styled from "styled-components"
import { Paragraph } from "../components/Paragraph"
import { Badge } from "../components/Badge"
import EqualProQuery from "../queries/EqualProQuery"
import { Gap } from "../components/Gap"

interface IProps {
  openEqualSoftwareModal: boolean
  setOpenEqualSoftwareModal: (boolean) => void
}
export const EqualSoftwareModal = ({
  openEqualSoftwareModal,
  setOpenEqualSoftwareModal,
}: IProps) => {
  return openEqualSoftwareModal ? (
    <Modal
      isOpen={openEqualSoftwareModal}
      variation="clean"
      onCloseButtonClicked={() => setOpenEqualSoftwareModal(false)}
      heading="E-qual Pro Software"
    >
      <EqualProQuery />
      <Gap bottom={30} />
      <Paragraph>
        While working at DDLi, I was working in an Agile team to deliver new
        features and improved existing features within the times agreed. This
        project has also given me experience of collaborating in a team Git
        repository with other developers. The Front End is built on Backbone.js
        which has a hard dependency on Underscore.js and jQuery.
      </Paragraph>
      <Gap bottom={20} />
      <Badge>JavaScript</Badge>
      <Badge>HTML</Badge>
      <Badge>SASS</Badge>
      <Badge>Backbone.js</Badge>
      <Badge>Underscore.js</Badge>
      <Badge>jQuery</Badge>
      <Badge>Mithril.js</Badge>
    </Modal>
  ) : null
}

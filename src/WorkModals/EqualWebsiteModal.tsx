import * as React from "react"
import { Modal } from "../components/Modal/Modal"
import styled from "styled-components"
import { Paragraph } from "../components/Paragraph"
import { Badge } from "../components/Badge"
import EqualProWebsiteQuery from "../queries/EqualProWebsiteQuery"
import { Gap } from "../components/Gap"

interface IProps {
  openEqualWebsiteModal: boolean
  setOpenEqualWebsiteModal: (boolean) => void
}
export const EqualWebsiteModal = ({
  openEqualWebsiteModal,
  setOpenEqualWebsiteModal,
}: IProps) => {
  return openEqualWebsiteModal ? (
    <Modal
      isOpen={openEqualWebsiteModal}
      variation="clean"
      onCloseButtonClicked={() => setOpenEqualWebsiteModal(false)}
      heading="E-qual Pro Website"
    >
      <EqualProWebsiteQuery />
      <Gap bottom={30} />
      <Paragraph>
        During my employment at DDLi, one of the tasks I has was to rebuild the
        website which promoted the software. I worked closely with a designer to
        build his ideas and challenged his ideas where necesarry. This website
        was build using HTML, JavaScript, CSS, Tachyons.io and AOS.js.
      </Paragraph>
      <Gap bottom={20} />
      <Badge>JavaScript</Badge>
      <Badge>HTML</Badge>
      <Badge>CSS</Badge>
      <Badge>Tachyons.io</Badge>
      <Badge>AOS.js</Badge>
    </Modal>
  ) : null
}

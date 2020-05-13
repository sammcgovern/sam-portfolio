import * as React from "react"
import { Modal } from "../components/Modal/Modal"
import styled from "styled-components"
import { Paragraph } from "../components/Paragraph"
import Image from "../components/image"
import { Badge } from "../components/Badge"
import { Gap } from "../components/Gap"

interface IProps {
  openABNModal: boolean
  setOpenABNModal: (boolean) => void
}
export const ABNModal = ({ openABNModal, setOpenABNModal }: IProps) => {
  return openABNModal ? (
    <Modal
      isOpen={openABNModal}
      variation="clean"
      onCloseButtonClicked={() => setOpenABNModal(false)}
      heading="ABN Sports Therapy"
    >
      <Image />
      <Gap bottom={30} />
      <Paragraph>
        ABN Sports Therapy are a local physiotherapy business who only has
        social media presence - no online presence. I'm currently producing a
        new website for the company using Gatsby.js, a static site generator.
        This site was also designed my me. I'm currently waiting for content
        before finising this and getting it live.
      </Paragraph>
      <Gap bottom={20} />
      <Badge>Gatsby.js</Badge>
      <Badge>React</Badge>
      <Badge>TypeScript</Badge>
      <Badge>Design</Badge>
    </Modal>
  ) : null
}

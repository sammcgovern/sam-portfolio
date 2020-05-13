import * as React from "react"
import { Modal } from "../components/Modal/Modal"
import { Paragraph } from "../components/Paragraph"
import { Badge } from "../components/Badge"
import { Gap } from "../components/Gap"
import SalecycleQuery from "../queries/salecycleQuery"

interface IProps {
  openSaleCycleComponentModal: boolean
  setOpenSaleCycleComponentModal: (boolean) => void
}
export const SaleCycleComponentModal = ({
  openSaleCycleComponentModal,
  setOpenSaleCycleComponentModal,
}: IProps) => {
  return openSaleCycleComponentModal ? (
    <Modal
      isOpen={openSaleCycleComponentModal}
      variation="clean"
      onCloseButtonClicked={() => setOpenSaleCycleComponentModal(false)}
      heading="SaleCycle Component Library"
    >
      <SalecycleQuery />
      <Gap bottom={30} />
      <Paragraph>
        While at SaleCycle, I have been working in a UI team to produce a
        component library based on the designers pattern library. This component
        library was produced mainly for the SaleCycle App to ensure the design
        was consistent in the different sections.
      </Paragraph>
      <Gap bottom={20} />
      <Badge>React</Badge>
      <Badge>TypeScript</Badge>
      <Badge>Storybook</Badge>
      <Badge>Percy.io testing</Badge>
    </Modal>
  ) : null
}

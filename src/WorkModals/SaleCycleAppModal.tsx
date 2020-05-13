import * as React from "react"
import { Modal } from "../components/Modal/Modal"
import { Paragraph } from "../components/Paragraph"
import { Badge } from "../components/Badge"
import { Gap } from "../components/Gap"
import SalecycleQuery from "../queries/salecycleQuery"

interface IProps {
  openSaleCycleAppModal: boolean
  setOpenSaleCycleAppModal: (boolean) => void
}
export const SaleCycleAppModal = ({
  openSaleCycleAppModal,
  setOpenSaleCycleAppModal,
}: IProps) => {
  return openSaleCycleAppModal ? (
    <Modal
      isOpen={openSaleCycleAppModal}
      variation="clean"
      onCloseButtonClicked={() => setOpenSaleCycleAppModal(false)}
      heading="SaleCycle App"
    >
      <SalecycleQuery />
      <Gap bottom={30} />
      <Paragraph>
        While at SaleCycle, I have been working closely with the design and
        product team to produce app functionality from within the functional
        teams. This allows me to help with any problems which may occur while
        building the features. I have also worked closesly with the BE team
        members to ensure the data I'm receiving works for both the BE and the
        FE.
      </Paragraph>
      <Gap bottom={20} />
      <Badge>React</Badge>
      <Badge>TypeScript</Badge>
      <Badge>React Hooks</Badge>
      <Badge>Redux</Badge>
      <Badge>Cypress Testing</Badge>
      <Badge>UX and UI knowledge</Badge>
    </Modal>
  ) : null
}

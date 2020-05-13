import * as React from "react"
import { Modal } from "../components/Modal/Modal"
import { Paragraph } from "../components/Paragraph"
import { Badge } from "../components/Badge"
import { Gap } from "../components/Gap"
import DDLiQuery from "../queries/DDLiQuery"

interface IProps {
  openDDLiWebsiteModal: boolean
  setOpenDDLiWebsiteModal: (boolean) => void
}
export const DDLiWebsiteModal = ({
  openDDLiWebsiteModal,
  setOpenDDLiWebsiteModal,
}: IProps) => {
  return openDDLiWebsiteModal ? (
    <Modal
      isOpen={openDDLiWebsiteModal}
      variation="clean"
      onCloseButtonClicked={() => setOpenDDLiWebsiteModal(false)}
      heading="DDLi Website"
    >
      <DDLiQuery />
      <Gap bottom={30} />
      <Paragraph>
        As DDLi recently rebranded, the next step was to update the company web
        presence to meet the new brand guidelines. Again, I worked closely with
        the designer to produce a home page where current and new clients could
        find information regarding the companies business goals. This home page
        was produced using HMTL, JavaScript, and CSS.
      </Paragraph>
      <Gap bottom={20} />
      <Badge>JavaScript</Badge>
      <Badge>HTML</Badge>
      <Badge>CSS</Badge>
    </Modal>
  ) : null
}

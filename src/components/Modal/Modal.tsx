import * as React from "react"
import AriaModal from "react-aria-modal"
import { Button } from "../Button"
import {
  ContentElement,
  HeaderButtonElement,
  HeaderContentElement,
  HeaderElement,
  ModalElement,
  ModalGlobalStyle,
} from "./Modal.styles"

export type ModalSize =
  | "small"
  | "medium"
  | "large"
  | "tall"
  | "wide"
  | "fullscreen"
export type ModalVariation = "normal" | "clean"

export interface IProps {
  /** The modal heading text. Defaults to undefined */
  heading?: string
  /** The modal size. "small" | "medium" (default) | "large" " | "tall" " | "wide" */
  size?: ModalSize
  /** "normal" (default) | "clean". */
  variation?: ModalVariation
  /** Whether the modal is displayed or not.  Defaults to false. */
  isOpen: boolean
  /** Event fired when close button is clicked. */
  onCloseButtonClicked?: (e?: any) => void
  /** Event fired when cancel button is clicked. */
  onCancelButtonClicked?: (e?: any) => void
  /** Event fired when ok button is clicked. */
  onOkButtonClicked?: (e?: any) => void
  /** Label of the okay button.  Defaults to "Ok" */
  okButtonLabel?: string
  /** Label of the cancel button.  Defaults to "Cancel" */
  cancelButtonLabel?: string
  /** True to center buttons, false to right-align them.  Defaults to false. */
  centerButtons?: boolean
  /** Slot for adding custom components (such as a checkbox for example) to the footer to the left of the buttons. */
  customFooter?: React.ReactNode
  /** Disable ok button. Defaults to false. */
  okButtonDisabled?: boolean
  /** Disable cancel button. Defaults to false. */
  cancelButtonDisabled?: boolean
  /** Disable close button. Defaults to false. */
  closeButtonDisabled?: boolean
  /** Overflow type.  Defaults to "auto" */
  overflow?: string
  /** Minimum width of modal.  Defaults to 400px */
  minWidth?: number
  /** Minimum height of modal.  Defaults to 300px */
  minHeight?: number
  /** Enable or disable maxHeight on the modal container. true (default) | false */
  maxHeight?: boolean
  /** Disable pressing escape to close the modal. Defaults to false. */
  disableEscClose?: boolean
  /** Disable clicking modal overlay to close the modal. Defaults to false. */
  disableModalOverlayClose?: boolean
  /** Optional header container. Appears to the right of the Heading. Defaults to undefined. */
  customHeader?: JSX.Element
}

export interface IState {
  isMounted: boolean
  modalActive: boolean
  modalEntered: boolean
}

export class Modal extends React.Component<IProps, IState> {
  public static defaultProps: Pick<
    IProps,
    "overflow" | "minWidth" | "minHeight"
  > = {
    overflow: "auto",
    minWidth: 400,
    minHeight: 200,
  }

  public state: IState = {
    isMounted: false,
    modalActive: false,
    modalEntered: false,
  }

  private timeout: any

  public componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  public componentDidMount() {
    const { isOpen } = this.props

    this.setState({ isMounted: true }, () => {
      if (isOpen) {
        this.activateModal()
      }
    })
  }

  public componentDidUpdate(prevProps) {
    const { isOpen } = this.props

    if (prevProps.isOpen !== isOpen) {
      if (isOpen) {
        this.activateModal()
      } else {
        this.deactivateModal()
      }
    }
  }

  public render() {
    const { isMounted, modalActive, modalEntered } = this.state

    const {
      heading,
      size,
      variation,
      onCloseButtonClicked,
      onCancelButtonClicked,
      onOkButtonClicked,
      okButtonLabel,
      cancelButtonLabel,
      centerButtons,
      customFooter,
      okButtonDisabled,
      cancelButtonDisabled,
      closeButtonDisabled,
      overflow,
      minWidth,
      minHeight,
      maxHeight,
      disableEscClose,
      disableModalOverlayClose,
      customHeader,
    } = this.props

    if (!isMounted) {
      return null
    }

    const underlayClickExits =
      !disableModalOverlayClose &&
      !closeButtonDisabled &&
      !!onCloseButtonClicked

    const escapeExits =
      !disableEscClose && !closeButtonDisabled && !!onCloseButtonClicked

    let underlayClass = "underlay"
    if (modalEntered) {
      underlayClass += " underlay--open"

      if (!underlayClickExits) {
        underlayClass += " underlay--no-click"
      }
    }

    return (
      <>
        <ModalGlobalStyle />

        <AriaModal
          escapeExits={escapeExits}
          focusDialog={true}
          getApplicationNode={this.getApplicationNode}
          mounted={modalActive}
          onExit={onCloseButtonClicked}
          titleText={heading}
          underlayClass={underlayClass}
          underlayClickExits={underlayClickExits}
          underlayColor={null}
          verticallyCenter={true}
        >
          <ModalElement
            data-testid="Modal"
            isOpen={modalEntered}
            size={size}
            overflow={overflow}
            minWidth={minWidth}
            minHeight={minHeight}
            maxHeight={maxHeight}
          >
            <HeaderElement variation={variation}>
              <HeaderContentElement>{heading}</HeaderContentElement>
              <HeaderButtonElement>
                {onCloseButtonClicked && (
                  <Button onClick={onCloseButtonClicked}>Close</Button>
                )}
                {customHeader ? customHeader : null}
              </HeaderButtonElement>
            </HeaderElement>
            <ContentElement overflow={overflow}>
              {this.props.children}
            </ContentElement>
          </ModalElement>
        </AriaModal>
      </>
    )
  }

  private activateModal = () => {
    this.setState(
      {
        modalActive: true,
      },
      () => {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.setState({
            modalEntered: true,
          })
        }, 200)
      }
    )
  }

  private deactivateModal = () => {
    this.setState(
      {
        modalEntered: false,
      },
      () => {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.setState({
            modalActive: false,
          })
        }, 200)
      }
    )
  }

  private getApplicationNode = () => {
    return document.getElementById("app-root")
  }

  private handleOkButtonClicked = e => {
    e.stopPropagation()
    if (this.props.onOkButtonClicked) {
      this.props.onOkButtonClicked(e)
    }
  }

  private handleCancelButtonClicked = e => {
    e.stopPropagation()
    if (this.props.onCancelButtonClicked) {
      this.props.onCancelButtonClicked(e)
    }
  }
}

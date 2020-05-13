import * as React from "react"
import ContainerDimensions from "react-container-dimensions"
import styled from "styled-components"

const ContainerElement = styled.div<IProps>`
  height: ${props => (props.isMaximised ? "100%" : "auto")};
  width: 100%;
`

const GridElement = styled.div<IStyledProps>`
  display: grid;
  height: ${props => (props.isMaximised ? "100%" : "auto")};
  grid-template-columns: repeat(
    ${props => (props.columnNumber ? props.columnNumber : "auto-fit")},
    minmax(
      ${props =>
        props.columnMinWidth.value +
        props.columnMinWidth.unit +
        ", " +
        props.columnMaxWidth.value +
        props.columnMaxWidth.unit}
    )
  );
  gap: ${props => props.gridGap}px;
  ${props =>
    (props.containerWidth <=
      props.columnMinWidth.value * props.columnNumber + props.gridGap &&
      "grid-template-columns: 1fr;") ||
    (props.containerWidth <= props.columnMinWidth.value &&
      "grid-template-columns: 1fr;")}
`

export interface IColumnWidthProps {
  value: number
  unit: string
}

interface IProps {
  /**
   * Sets a min-width to the columns
   * @default columnMinWidth: { value: 0, unit: "px" }
   */
  columnMinWidth?: IColumnWidthProps
  /**
   * Sets a max-width to the columns
   * @default columnMaxWidth: { value: 1, unit: "fr" }
   */
  columnMaxWidth?: IColumnWidthProps
  /**
   * Sets a fixed number of columns
   */
  columnNumber?: number
  /**
   * Sets the gap between each column
   * @default 15
   */
  gridGap?: number
  /**
   * Sets the grid & container to 100% height
   */
  isMaximised?: boolean
}

interface IStyledProps extends Partial<IProps> {
  containerWidth?: number
}

const defaultProps: IProps = {
  columnMinWidth: { value: 0, unit: "px" },
  columnMaxWidth: { value: 1, unit: "fr" },
  gridGap: 15,
}

export const Grid: React.FC<IProps> = props => (
  <ContainerElement isMaximised={props.isMaximised} data-testid="GridContainer">
    <ContainerDimensions>
      {({ width }) => (
        <GridElement containerWidth={width} {...props} data-testid="Grid">
          {props.children}
        </GridElement>
      )}
    </ContainerDimensions>
  </ContainerElement>
)

Grid.defaultProps = defaultProps

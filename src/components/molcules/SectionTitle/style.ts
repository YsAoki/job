import styled from "styled-components";
import { SectionTitleProps } from ".";

export const SSectionTitleWrapper = styled.div<SectionTitleProps>`
  display: flex;
  align-items: center;
  height: ${({height}) => height};
`
import styled from "styled-components";
import FlexBox from "../FlexBox";

export const SChevronWrapper = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  width: 0.75rem;
`

export const SChevron = styled.div`
  border-bottom: ${({theme}) => `2px solid ${theme.fontColor.black}`};
  border-right: ${({theme}) => `2px solid ${theme.fontColor.black}`};
  width: 0.5rem;
  height: 0.5rem;
  transform:rotate(-45deg)
`
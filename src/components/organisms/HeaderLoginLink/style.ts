import styled from "styled-components";
import FlexBox from "../../atoms/FlexBox";

export const SFlexBox = styled(FlexBox).attrs({ as: 'ul' })`
  justify-content: space-between;
  display: flex;
`
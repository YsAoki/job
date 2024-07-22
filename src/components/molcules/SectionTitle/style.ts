import styled from "styled-components";
import FlexBox from "../../atoms/FlexBox";
import TitleText from "../../atoms/TitleText";

export const SSectionTitleWrapper = styled(FlexBox)`
  align-items: center;
  justify-content: space-between;
  height: 1.52rem;
  margin-bottom: 2.22rem;
  a {
    width: 4.5rem;
  }
`

export const SSectionTitle = styled(FlexBox)`
  align-items: center;
`

export const STitleText = styled(TitleText)`
  font-size: 1.5rem;
`
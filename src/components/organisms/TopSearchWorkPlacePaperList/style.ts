import styled from "styled-components";
import TitleText from "../../atoms/TitleText";

export const SListWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 28rem;
  height: 4.1rem;
`

export const SRegionName = styled(TitleText)`
  font-weight: 700;
`

export const SPrefectureList = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`


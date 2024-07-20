import styled from "styled-components";
import TitleText from "../../atoms/TitleText";

export const SCard = styled.li`
  display: flex;
  width: 29%;
  height: 4.75rem;
  border-bottom: ${({theme}) => `1px solid ${theme.borderColor.grey}`};
  cursor: pointer;
`

export const SCardInnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 90%;
  padding-bottom: 1.25rem;
`

export const SCardInnerRight = styled.div`
  position: relative;
  width: 10%;
`

export const SSwiperArrowAbsolute = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const SCardTitle = styled(TitleText)`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.fontColor.blue};
`

export const SClassificationName = styled.p`
  height: 1.75rem;
  font-size: 0.75rem;
  line-height: 0.88rem;
  overflow: hidden;
  text-overflow: ellipsis; //効かない...
`
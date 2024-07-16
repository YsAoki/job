import styled from "styled-components";
import Container from "../../atoms/Container";
import FlexBox from "../../atoms/FlexBox";
import PaperBox from "../../atoms/PaperBox";
import TitleText from "../../atoms/TitleText";
import IconButtonLike from "../../molcules/IconButtonLike";

export const STopNewArriveCard = styled(PaperBox)`
  height: 25rem;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 0.25rem;
`

export const SImageWrapper = styled.div`
  height: 52%;
  width: 100%;
`

export const SInfoContainer = styled(Container)`
  padding: 16px 0;
  width: 89%;
`

export const SCompanyNameText = styled(TitleText)`
  margin-bottom: 0.75rem;
`

export const SJobsDescription = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`

export const SBottomIconWithWrapper = styled(FlexBox)`
  flex-direction: column;
  justify-content: space-between;
  height: 2.5rem;
  margin-bottom: 0.75rem;
`

export const SIconWithText = styled.p`
  font-size: 12px;
`

export const SIconButtonLike = styled(IconButtonLike)`
  width: 100%;
`


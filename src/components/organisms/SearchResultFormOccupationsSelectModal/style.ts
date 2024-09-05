import styled from "styled-components";
import Container from "../../atoms/Container";
import FlexBox from "../../atoms/FlexBox";
import PaperBox from "../../atoms/PaperBox";
import ScrollBox from "../../atoms/ScrollBox";
import TitleText from "../../atoms/TitleText";

export const SPaperBox = styled(PaperBox)`
  width: 36rem;
  position: relative;
`

export const SContainer = styled(Container)`
  width: 86%;
  padding: 2.6rem 0 2.5rem;
`

export const STitleText = styled(TitleText)`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2.6rem;
`

export const SSelectAreaWrapper = styled(FlexBox)`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3rem; 
`

export const SButtonWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  width: 62%;
  button {
    width: 44%;
  }
`

export const SSelectArea = styled.div`
  width: 45%;
`

export const SScrollBox = styled(ScrollBox)`
  height: 18.1rem;
`

export const SAlertUserTodo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const SCategoryTitle = styled(TitleText)`
  margin-bottom: 1.1rem;
`

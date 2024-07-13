import styled from "styled-components";
import Container from "../../atoms/Container";
import PaperBox from "../../atoms/PaperBox";
import Button from "../../atoms/Button";

export const SPaperBox = styled(PaperBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 62.5rem;
  height: 5.5rem;
`;

export const SContainer = styled(Container)`
  width: 92%;
  height: 2.5rem
`

export const SForm = styled.form`
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
`

export const SSubmitButton = styled(Button)`
  width: 8rem
`
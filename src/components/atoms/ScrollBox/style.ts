import styled from "styled-components";

export const SScrollBox = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  border: ${({theme}) => `1px solid ${theme.borderColor.grey}`}
`
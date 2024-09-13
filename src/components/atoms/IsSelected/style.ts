import styled from "styled-components";

export const SIsSelected = styled.p`
  /* line-height: 1.125rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.125rem;
  width: 2.75rem;
  min-width: 2.75rem;
  margin-left: 1rem;
  text-align: center;
  font-size: 0.75rem;
  color: ${({theme}) => theme.fontColor.white};
  background-color: ${({theme}) => theme.color.primary};
  border-radius: 0.25rem;
`
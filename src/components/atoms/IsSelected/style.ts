import styled from "styled-components";

export const SIsSelected = styled.p`
  line-height: 1.125rem;
  margin-left: 1rem;
  text-align: center;
  font-size: 0.75rem;
  color: ${({theme}) => theme.fontColor.white};
  background-color: ${({theme}) => theme.color.primary};
  border-radius: 0.25rem;
`
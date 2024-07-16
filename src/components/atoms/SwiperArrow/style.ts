import styled from "styled-components";

export const SSwiperArrow = styled.div`
  border-right: ${({theme}) => `2px solid ${theme.color.primary}`};
  border-bottom: ${({theme}) => `2px solid ${theme.color.primary}`};
  height: 0.5rem;
  width: 0.5rem;
  transform: rotate(-45deg);
`
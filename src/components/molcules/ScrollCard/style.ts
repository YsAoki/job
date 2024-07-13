import styled from "styled-components";

export const SScrollCard = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  line-height: 3rem;
  padding-left: 1rem;
  border: ${({theme}) => `1px solid ${theme.borderColor.grey}`};
  cursor: pointer;
`;

export const SScrollCardText = styled.p`
  font-size: 0.87rem;
`
import styled from "styled-components";

export const SScrollCard = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  border: ${({theme}) => `1px solid ${theme.borderColor.grey}`};
  cursor: pointer;
`

export const SCheckBoxMargin = styled.div`
  margin-right: 0.75rem;
`

export const SScrollCardText = styled.p`
  font-size: 0.87rem;
`
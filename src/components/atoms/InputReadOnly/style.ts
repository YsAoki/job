import styled from "styled-components";

export const SInput = styled.input`
  width: 100%;
  height: 100%;
  border: ${({theme}) => `1px solid ${theme.borderColor.grey}`};
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0 1rem;
  &::placeholder {
    color: ${({theme}) => theme.fontColor.grey};
  };
`
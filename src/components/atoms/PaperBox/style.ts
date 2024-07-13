import styled from "styled-components";

export const SPaperBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.backWhite};
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1), 
    0 4px 6px rgba(0, 0, 0, 0.1);
`;
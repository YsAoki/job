import styled from "styled-components";

export const SFlexBox = styled.div<{$alignItems: string, $justifyContent: string, $flexDirection: string}>`
  display: flex;
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
`;

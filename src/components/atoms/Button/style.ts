import styled from "styled-components";

export const SButton = styled.button<{ $width?: string; $fill?: boolean }>`
  height: 2.5rem;
  width: ${({ $width }) => $width};
  background-color: ${({ $fill, theme }) => $fill ? theme.color.primary : theme.color.backWhite};
  color: ${({$fill, theme}) => $fill? theme.fontColor.white:theme.fontColor.black};
  border: ${({ $fill, theme }) => $fill ? "none" : `1px solid ${theme.color.primary}`};
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: opacity 0.4s;
  }
`
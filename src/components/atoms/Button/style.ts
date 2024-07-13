import styled from "styled-components";
import { ButtonStyleProps } from ".";

export const SButton = styled.button<ButtonStyleProps>`
  height: 2.5rem;
  width: "auto";
  background-color: ${({ $fill, theme }) => $fill ? theme.color.primary : theme.color.backWhite};
  color: ${({$fill, theme}) => $fill? theme.fontColor.white:theme.fontColor.blue};
  border: ${({ $fill, theme }) => $fill ? "none" : `1px solid ${theme.color.primary}`};
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: opacity 0.4s;
  }
`
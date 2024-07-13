import styled from "styled-components";
import { TitleTextStyleProps } from ".";

export const STitleText = styled.h1<TitleTextStyleProps>`
  font-size: 1rem;
  color: ${({$fill, theme}) => $fill? theme.color.primary : theme.fontColor.black};
`
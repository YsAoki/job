import styled from "styled-components";

export const STitleText = styled.h1<{$fontSize: string, $fontWeight: number, $isPrimary: boolean}>`
  font-size: ${({$fontSize}) => $fontSize};
  font-weight: ${({$fontWeight}) => $fontWeight};
  color: ${({$isPrimary, theme}) => $isPrimary? theme.color.primary : theme.fontColor.black};
`
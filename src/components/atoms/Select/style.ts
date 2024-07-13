import styled from "styled-components";
import { SelectStyleProps } from ".";

export const SSelect = styled.select<SelectStyleProps>`
  width: 100%;
  height: 100%;
  color: ${({$valueIsDefault, theme}) => $valueIsDefault ? `${theme.fontColor.grey}`: `${theme.fontColor.black}`};
  border: ${({theme}) => `1px solid ${theme.borderColor.grey}`};
  border-radius: 0.25rem;
  padding: 0 1rem;
  cursor: pointer; 
`
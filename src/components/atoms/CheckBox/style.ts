import styled from "styled-components";
import { CheckBoxStyleProps } from ".";

export const SCheckBox = styled.div<CheckBoxStyleProps>`
  position: relative;
  width: 1.125rem;
  height: 1.125rem;
  border: ${({theme}) => `1px solid ${theme.fontColor.blue}`};
  border-radius: 0.25rem;
  background-color: ${({$isSelected, theme}) => $isSelected ? `${theme.color.primary}`: "initial"};

`

export const SCheckBoxSymbol = styled.div<CheckBoxStyleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%) rotate(-45deg);
  width: 0.8rem;
  height: 0.4rem;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  display: ${({$isSelected}) => $isSelected ? "initial" : "none"};
`

import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLinkStyleProps } from ".";

export const SListWrapper = styled.li`
  display: inline-block;
`

export const SNavLink = styled(Link)<NavLinkStyleProps>`
  color: ${({theme, $fill}) => $fill ? theme.color.primary : theme.fontColor.black};
  font-size: 0.875rem;
  text-decoration: none;
`
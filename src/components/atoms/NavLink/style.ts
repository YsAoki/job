import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLinkStyleProps } from ".";

export const SNavLink = styled(Link)<NavLinkStyleProps>`
  display: inline-block;
  color: ${({theme, $fill}) => $fill ? theme.color.primary : theme.fontColor.black};
  font-size: 0.875rem;
  text-decoration: none;
`
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SNavLink = styled(Link)`
  color: ${({theme}) => theme.color.primary};
  font-size: 0.875rem;
  text-decoration: none;
`
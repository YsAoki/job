import styled from "styled-components";
import FlexBox from "../../atoms/FlexBox";
import NavLink from "../../atoms/NavLink";

export const SFlexBox = styled(FlexBox)`
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`

export const SBreadCrumbsMargin = styled.div`
  margin-bottom: 3.125rem;
`

export const SBreadCrumbsLink = styled(NavLink)`
  font-size: 0.75rem;
`

export const SBreadCrumbsText = styled.p`
  font-size: 0.75rem;
`
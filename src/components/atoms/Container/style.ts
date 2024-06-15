import styled from "styled-components";

export const SContainer = styled.div<{$maxWidth: string, $width: string}>`
  width: ${({$width}) => $width};
  max-width: ${({$maxWidth}) => $maxWidth};
  margin-inline: auto;
`
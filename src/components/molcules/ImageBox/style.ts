import styled from "styled-components";

export const SImageBox = styled.div<{$width: string, $height: string}>`
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};
  overflow: hidden;
`
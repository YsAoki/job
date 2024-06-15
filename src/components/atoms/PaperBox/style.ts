import styled from "styled-components";

export const SPaperBox = styled.div<{$width: string, $height: string}>`
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};
  border-radius: 0.5rem;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1), 
    0 4px 6px rgba(0, 0, 0, 0.1);
`
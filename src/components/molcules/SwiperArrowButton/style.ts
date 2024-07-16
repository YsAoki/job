import styled from "styled-components";
import { SwiperArrowButtonStyleProps } from ".";

export const SSwiperArrowButton = styled.button<SwiperArrowButtonStyleProps>`
  position: absolute;
  top: 50%;
  left: ${({$directionIsRight}) => $directionIsRight ? "100%":"0%"};
  transform: ${({$directionIsRight}) => $directionIsRight ? "translate(-50%, -50%)":"translate(-50%,-50%)"};
  width: 3rem;
  height: 3rem;
  background-color: ${({theme}) => theme.color.backWhite};
  border: none;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1), 
    0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
  z-index: 5;
`

export const SRotateBox = styled.div<SwiperArrowButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: rotate(${({$directionIsRight}) => $directionIsRight? "0": "180deg"});
`
import styled from "styled-components";

export const SOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  opacity: 1;
  background-color: rgba(64, 64, 64, 0.4);
  animation: fadein 0.4s ease;
`
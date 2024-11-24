import styled, { keyframes } from 'styled-components';

const bounceScale = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
`;

export const LoadingInitial = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(17, 139, 233);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
`;

export const LoaderInitial = styled.img`
  width: 300px;
  height: auto;
  animation: ${bounceScale} 0.4s ease-in-out;
  filter: invert(1) grayscale(1) brightness(100);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

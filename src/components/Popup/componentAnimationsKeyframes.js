import { keyframes } from 'styled-components';

export const componentAnimationsKeyframes = {
  contextMenu: keyframes`
    from {
      opacity: 0;
      visibility: hidden;
      transform: translate(-115px, -30px);
    }

    to {
      opacity: 1;
      visibility: visible;
      transform: translate(-125px, -30px);
    }
  `,
  navMenu: keyframes`
    from {
      opacity: 0;
      visibility: hidden;
      transform: translate(0, -30px);
    }

    to {
      opacity: 1;
      visibility: visible;
      transform: translate(0, 1px);
    }
  `
};

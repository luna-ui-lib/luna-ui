import { keyframes } from 'styled-components';

export const componentAnimationsKeyframes = {
  fadeIn: keyframes`
    from {
      opacity: 0;
      visibility: hidden;
    }

    to {
      opacity: 1;
      visibility: visible;
    }
  `,
  fadeOut: keyframes`
    from {
      opacity: 1;
      visibility: visible;
    }

    to {
      opacity: 0;
      offset: 0;
      visibility: hidden;
    }
  `,
  bounceIn: keyframes`
    0% {
      offset: 0;
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      transform: scale3d(.9, .9, .9);
    }

    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      transform: scale3d(.97, .97, .97);
    }

    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  `,
  bounceOut: keyframes`
    0% {
      opacity: 1;
      transform: 'none';
    }

    20% {
      opacity: 1;
      transform: scale3d(.9, .9, .9);
    }

    50% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }

    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }

    80% {
      transform: scale3d(.97, .97, .97);
    }

    100% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }
  `
};

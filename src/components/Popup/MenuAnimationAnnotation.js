import { componentAnimationsKeyframes } from './componentAnimationsKeyframes';

export function MenuAnimation(target) {
  target.prototype._getAnimation = function(animationTarget, inverse = false) {
    if (this.state.active && !inverse) {
      return `animation: ${componentAnimationsKeyframes[animationTarget]} .25s ease-in;`;
    }
    return `animation: ${componentAnimationsKeyframes[animationTarget]} .25s reverse ease-in; `;
  };

  target.prototype._getElementAnimationClass = function(animatedElement, firstLoad) {
    const animatedElemetClasses = (animatedElement !== undefined) && animatedElement.classList.toString();

    if (this.state.active) {
      return 'elementIn';
    } else if ((animatedElemetClasses && animatedElemetClasses.indexOf('elementIn') !== -1) && !firstLoad) {
      return 'elementOut';
    }
    return '';
  };
}

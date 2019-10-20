import { Easing } from './utils/easing';
import { Interpolation } from './utils/interpolation';

export class AnimationPlayerTween {
  private _interpoaltionFunction = Interpolation.Linear;
  private _easingFunction = Easing.Linear.None;
  private _alpha: any = {};
  private _alphaCopy: any = {};
  private _omega: any = {};

  constructor(alpha: any) {
    this._alpha = alpha;
    this._alphaCopy = { ...this._alpha };
  }

  interpolation(interpolationFunction: (startValue: number, endValue: number, normalizedValue: number) => number): AnimationPlayerTween {
    this._interpoaltionFunction = interpolationFunction;

    return this;
  }

  easing(easingFunction: (k: number) => number): AnimationPlayerTween {
    this._easingFunction = easingFunction;

    return this;
  }

  to(omega: any): AnimationPlayerTween {
    this._omega = omega;

    return this;
  }

  update(progress: number): AnimationPlayerTween {
    if (progress < 0) {
      throw new Error('[AnimationPlayerTween] progress cannot be less than 0');
    }

    if (progress > 1) {
      throw new Error('[AnimationPlayerTween] progress cannot be greater than 1');
    }

    progress = this._easingFunction(progress);

    for (let prop in this._omega) {
      if (prop in this._alpha) {
        const startValue = this._alphaCopy[prop];
        const endValue = this._omega[prop];
        const current = this._interpoaltionFunction(startValue, endValue, progress);

        this._alpha[prop] = current;
      }
    }

    return this;
  }
}

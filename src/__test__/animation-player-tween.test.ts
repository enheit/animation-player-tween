import { AnimationPlayerTween } from '../animation-player-tween';
import { Easing } from '../utils/easing';
import { Interpolation } from '../utils/interpolation';

describe('AnimationPlayerTween', () => {
  it('should modify alpha properties on each update() call', () => {
    const alpha = { x: 0, y: 100 };
    const omega = { x: 100, y: 1000 };

    const tween = new AnimationPlayerTween(alpha).to(omega);

    tween.update(0.1);
    expect(alpha).toEqual({ x: 10, y: 190 });

    tween.update(0.5);
    expect(alpha).toEqual({ x: 50, y: 550 });

    tween.update(1);
    expect(alpha).toEqual(omega);
  });

  it('should skip properties that do exist in omega object but does not exist in the alpha object', () => {
    const alpha = { x: 0 };
    const omega = { x: 100, z: 100 };

    const tween = new AnimationPlayerTween(alpha).to(omega);

    tween.update(0.1);
    expect(alpha).toEqual({ x: 10 });

    tween.update(0.5);
    expect(alpha).toEqual({ x: 50 });

    tween.update(1);
    expect(alpha).toEqual({ x: omega.x });
  });

  it('should update alpha object according to easing function', () => {
    const alpha = { x: 0 };
    const omega = { x: 100 };

    const tween = new AnimationPlayerTween(alpha)
      .to(omega)
      .easing(Easing.Cubic.In); // <-- Set easing function

    tween.update(0.1);
    expect(alpha).toEqual({ x: 0.10000000000000002 });

    tween.update(0.5);
    expect(alpha).toEqual({ x: 12.5 });

    tween.update(1);
    expect(alpha).toEqual(omega);
  });

  it('should update alpha object according to interpolation function', () => {
    const alpha = { x: 0 };
    const omega = { x: 100 };

    const tween = new AnimationPlayerTween(alpha)
      .interpolation(Interpolation.Linear)
      .to(omega);

    tween.update(0.1);
    expect(alpha).toEqual({ x: 10 });

    tween.update(0.5);
    expect(alpha).toEqual({ x: 50 });

    tween.update(1);
    expect(alpha).toEqual(omega);
  });

  it('should throw error if progress < 0', () => {
    try {
      new AnimationPlayerTween({ x: 0 }).to({ x: 100 }).update(-1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', '[AnimationPlayerTween] progress cannot be less than 0');
    }
  });

  it('should throw error if progress > 1', () => {
    try {
      new AnimationPlayerTween({ x: 0 }).to({ x: 100 }).update(1.1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', '[AnimationPlayerTween] progress cannot be greater than 1');
    }
  });
});

export declare class AnimationPlayerTween {
    private _interpoaltionFunction;
    private _easingFunction;
    private _alpha;
    private _alphaCopy;
    private _omega;
    constructor(alpha: any);
    interpolation(interpolationFunction: (startValue: number, endValue: number, normalizedValue: number) => number): AnimationPlayerTween;
    easing(easingFunction: (k: number) => number): AnimationPlayerTween;
    to(omega: any): AnimationPlayerTween;
    update(progress: number): AnimationPlayerTween;
}

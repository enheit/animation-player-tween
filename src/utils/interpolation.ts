export const Interpolation = {
  Linear(startValue: number, endValue: number, normalizedValue: number): number {
    return startValue + normalizedValue * (endValue - startValue);
  }
};
